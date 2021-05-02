import React from "react";
import { compose } from "redux"
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import RegisterPR from "../../presentation/auth/RegisterPR";
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

    onSubmit = (name, email, password) => {
        this.props.register(name, email, password, result => {
            console.log("result", result);
            if(result.status === "SUCCESS"){
                this.props.history.push(this.props.hrefSuccess)
            }else{
                const errMsg = result.message;
                this.setState({error:errMsg});
            }
        })
    }

    render() {
        
        const { loadingRegister } = this.props.AuthStore;
        const { error } = this.state;
        
        if(loadingRegister){
            return <RLoading />
        }

        return (
            <RegisterPR 
                error={error}
                onSubmit={this.onSubmit}
                urlLogin={ROUTES.PUBLIC.LOGIN}
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

