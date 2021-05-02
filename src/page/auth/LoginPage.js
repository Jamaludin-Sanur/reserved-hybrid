import React from 'react'
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core'
import LoginFN from "../../functional/auth/LoginFN";
import { ROUTES } from "../../config";

const Props = {};

const Style = {
    root: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

class LoginPage extends React.Component {

    render(){

        const { classes } = this.props;

        return (
            <section className={classes.root}>
                <LoginFN hrefSuccess={ROUTES.MEMBER.ALL_NEWS}/>
            </section>
        )
    }

}

LoginPage.defaultProps = Props;
export default compose(
    withRouter,
    withStyles(Style),
)(LoginPage)

