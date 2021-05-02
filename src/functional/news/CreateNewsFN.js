import React from 'react'
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core'
import FormNewsPR from "../../presentation/news/FormNewsPR";
import NewsRedux from "../../redux/news";
import { connect } from "react-redux";
import { RLoading } from "../../components";
import { withResponse } from "../../hoc"

const Props = {};

const Style = {
    root: {}
};

class CreateNewsFN extends React.Component {

    state = {
        news: {
            title: '',
            description: ''
        }
    }

    onNewsChange = (news) => {
        const finalNews = {
            ...this.state.news,
            ...news,
        }
        this.setState({news:finalNews})
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        const { news } = this.state;

        this.props.createNews(news, response=>{
            this.props.showResponse({
                response : response,
                onSuccess : this.props.onSuccess,
                onError : this.props.onError,
                onFatalError : this.props.onFatalError
            })
        })
    }

    render(){

        const { classes, NewsStore } = this.props;
        const { news } = this.state;

        const isLoading = NewsStore.loadingCreateNews;
        if(isLoading) return <RLoading />


        return (
            <FormNewsPR 
                news={news}
                onNewsChange={this.onNewsChange}
                onSubmit={this.onSubmit}
            />
        )
    }

}

const mapState = (state) => ({
	NewsStore: state.NewsStore
})

const mapDispatch = {
    ...(NewsRedux.action)
}

CreateNewsFN.defaultProps = Props;
export default compose(
    connect(mapState, mapDispatch),
    withRouter,
    withStyles(Style),
    withResponse
)(CreateNewsFN)

