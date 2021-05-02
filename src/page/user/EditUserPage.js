import React from 'react';
import { withStyles } from '@material-ui/core';
import EditUserFN from "../../functional/users/EditUserFN";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../config";

const Props = {};

const Style = {
    root: {}
};

class EditUserPage extends React.Component {

    render(){

        const { classes } = this.props;

        return (
            <EditUserFN 
                onSuccess={()=>{
                    this.props.history.push(ROUTES.MEMBER.ALL_NEWS)
                }}
            />
        )
    }

}

EditUserPage.defaultProps = Props;
export default compose(
    withStyles(Style),
    withRouter,
)(EditUserPage)

