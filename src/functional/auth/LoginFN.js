import React from "react";
import { compose } from "redux"
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import LoginPR from "../../presentation/auth/LoginPR";
import AuthAction from "../../redux/auth/AuthAction";
import { withRouter } from "react-router-dom";
import { RLoading } from "../../components";
import { ROUTES } from "../../config";

const Props = {
    hrefSuccess: "",
}

const Style = {}

class LoginPasswordFN extends React.Component {

    state = {
        error: undefined,
    }

    onSubmit = (email, password) => {
        this.props.login(email, password, result => {
            if(result.status === "SUCCESS"){
                this.props.history.push(this.props.hrefSuccess)
            }else{
                const errMsg = result.message;
                this.setState({error:errMsg});
            }
        });
    }

    render() {
        
        const { loadingLogin } = this.props.AuthStore;
        const { error } = this.state;

        if(loadingLogin){
            return <RLoading />
        }

        return (
            <LoginPR 
                title={this.props.title}
                error={error}
                onSubmit={this.onSubmit}
                urlRegister={ROUTES.PUBLIC.REGISTER}
            />
        )
    }

}

const mapState = (state) => ({
    AuthStore: state.AuthStore
})

const mapDispatch = {
    ...AuthAction,
}

LoginPasswordFN.defaultProps = Props;
export default compose(
    connect( mapState, mapDispatch ),
    withStyles(Style),
    withRouter
)(LoginPasswordFN)

