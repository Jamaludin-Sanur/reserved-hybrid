import React from 'react';
import { withStyles } from '@material-ui/core';
import ListNewsFN from "../../functional/news/ListNewsFN";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../config";

const Props = {};

const Style = {
    root: {}
};

class ListNewsPage extends React.Component {

    render(){
        
        return (
            <ListNewsFN  />
        )
    }

}

ListNewsPage.defaultProps = Props;
export default compose(
    withStyles(Style),
    withRouter,
)(ListNewsPage)

