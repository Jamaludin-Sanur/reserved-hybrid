import React from 'react';
import { withStyles } from '@material-ui/core';
import ListUserFN from "../../functional/users/ListUserFN";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../config";

const Props = {};

const Style = {
    root: {}
};

class ListUserPage extends React.Component {

    render(){
        
        return (
            <ListUserFN  />
        )
    }

}

ListUserPage.defaultProps = Props;
export default compose(
    withStyles(Style),
    withRouter,
)(ListUserPage)

