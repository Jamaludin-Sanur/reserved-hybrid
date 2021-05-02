import React from 'react'
import { withStyles } from '@material-ui/core'
import { connect } from "react-redux";
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import ListNewsPR from "../../presentation/news/ListNewsPR";
import NewsRedux from "../../redux/news";
import { RLoading } from "../../components";
import { ROUTES } from "../../config";
import { withResponse } from "../../hoc"

const Props = {
    filter: undefined
};

const Style = {
    root: {}
};

class ListNewsFN extends React.Component {

    componentDidMount = () => {
        this.loadData();
    }

    loadData = () => {
        const { filter } = this.props;

        this.props.getAllNews(filter, response => {
            if(response.status !== "SUCCESS"){
                this.props.showResponse({
                    response : response,
                    onSuccess : this.props.onError,
                    onError : this.props.onError,
                    onFatalError : this.props.onFatalError
                })
            }
        });
    }

    onClickDelete = (news) => {
        if(!news) return
        this.props.deleteNews(news.id, response=>{
            this.props.showResponse({
                response : response,
                onSuccess : () => this.loadData(),
                onError : this.props.onError,
                onFatalError : this.props.onFatalError
            })
        })
    }

    render() {

        const { classes, NewsStore, AuthStore } = this.props;
        
        const loading = NewsStore.loadingAllNews || NewsStore.loadingDeleteNews;
        const allNews = NewsStore.allNews || {};
        const newsArray = allNews.data || [];

        const currentUser = AuthStore.user;

        if (loading) return <RLoading />

        return (
            <ListNewsPR
                newsArray={newsArray}
                currentUser={currentUser}
                onClickCreate={()=>this.props.history.push(ROUTES.MEMBER.CREATE_NEWS)}
                onClickEdit={(news)=>this.props.history.push(ROUTES.MEMBER.EDIT_NEWS+"?id="+news.id)}
                onClickDelete={this.onClickDelete}
            />
        )
    }

}

const mapState = (state) => ({
    NewsStore: state.NewsStore,
    AuthStore: state.AuthStore
})

const mapDispatch = {
    ...(NewsRedux.action)
}

ListNewsFN.defaultProps = Props;
export default compose(
    connect(mapState, mapDispatch),
    withStyles(Style),
    withRouter,
    withResponse,
)(ListNewsFN)

