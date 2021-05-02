import React from 'react';
import { withStyles } from '@material-ui/core';
import CreateNewsFN from "../../functional/news/CreateNewsFN";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../config";

const Props = {};

const Style = {
    root: {}
};

class CreateNewsPage extends React.Component {

    render(){

        const { classes } = this.props;

        return (
            <CreateNewsFN 
                onSuccess={()=>{
                    this.props.history.push(ROUTES.MEMBER.ALL_NEWS)
                }}
            />
        )
    }

}

CreateNewsPage.defaultProps = Props;
export default compose(
    withStyles(Style),
    withRouter,
)(CreateNewsPage)

