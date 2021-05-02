import React from 'react';
import { withStyles } from '@material-ui/core';
import EditNewsFN from "../../functional/news/EditNewsFN";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../config";

const Props = {};

const Style = {
    root: {}
};

class EditNewsPage extends React.Component {

    render(){

        const { classes } = this.props;

        const queryString = new URLSearchParams(this.props.history.location.search);
        const idNews = queryString.get("id");
        console.log("111", idNews)
        if(!idNews) return 'id is required';

        return (
            <EditNewsFN 
                idNews={idNews}
                onSuccess={()=>{
                    this.props.history.push(ROUTES.MEMBER.ALL_NEWS)
                }}
            />
        )
    }

}

EditNewsPage.defaultProps = Props;
export default compose(
    withStyles(Style),
    withRouter,
)(EditNewsPage)

