import React from 'react'
import { withStyles } from '@material-ui/core'
import {
    RegisterPage,
    LoginPage
} from "../page";
import {
    Link,
    Switch,
    Route,
} from "react-router-dom";
import { ROUTES } from "../config";

const Props = {};

const Style = {
    root: {}
};

class LoginLayout extends React.Component {

    render(){

        const { classes } = this.props;

        return (
            <Switch>
                <Route path={ROUTES.PUBLIC.REGISTER} component={RegisterPage} />
                <Route path={ROUTES.PUBLIC.LOGIN} component={LoginPage} />
                <Route path={"/"} component={LoginPage} />
            </Switch>
        )
    }

}

LoginLayout.defaultProps = Props;
export default withStyles(Style)(LoginLayout)

