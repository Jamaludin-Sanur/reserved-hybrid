import React from 'react'
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core'
import RegisterFN from "../../functional/auth/RegisterFN";
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

class RegisterPage extends React.Component {

    render(){

        const { classes } = this.props;

        return (
            <section className={classes.root}>
                <RegisterFN hrefSuccess={ROUTES.MEMBER.ALL_NEWS} />
            </section>
        )
    }

}

RegisterPage.defaultProps = Props;
export default compose(
    withRouter,
    withStyles(Style),
)(RegisterPage)

