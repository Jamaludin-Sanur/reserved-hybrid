import React from 'react'
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core'
import FormNewsPR from "../../presentation/news/FormNewsPR";
import NewsRedux from "../../redux/news";
import { connect } from "react-redux";
import { RLoading } from "../../components";
import { withResponse } from "../../hoc"

const Props = {
    idNews: undefined,
};

const Style = {
    root: {}
};

class EditNewsFN extends React.Component {

    state = {
        news: {
            title: '',
            description: ''
        }
    }

    componentDidMount = () => {
        this.loadData();
    }

    loadData = () => {
        const { idNews } = this.props;
        this.props.getSingleNews(idNews, result => {
            if(result.status === "SUCCESS"){
                const news = {
                    ...this.state.news,
                    ...result.data,
                };
                this.setState({news:news});
            }
        })
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
        const { idNews } = this.props;
        const { news } = this.state;

        this.props.editNews(idNews, news, response=>{
            this.props.showResponse({
                response : response,
                onSuccess : this.props.onSuccess,
                onError : this.props.onError,
                onFatalError : this.props.onFatalError
            })
        })
    }

    render(){

        const { classes, NewsStore, idNews } = this.props;
        const { news } = this.state;

        // Validation
        if(!idNews) return 'idNews is required';

        // Loading
        const isLoading = NewsStore.loadingEditNews || NewsStore.loadingNews;
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

EditNewsFN.defaultProps = Props;
export default compose(
    connect(mapState, mapDispatch),
    withRouter,
    withStyles(Style),
    withResponse
)(EditNewsFN)

