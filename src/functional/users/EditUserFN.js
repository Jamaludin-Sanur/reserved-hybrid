import React from 'react'
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core'
import FormUserPR from "../../presentation/users/FormUserPR";
import UserRedux from "../../redux/user";
import { connect } from "react-redux";
import { RLoading } from "../../components";
import { withResponse } from "../../hoc"

const Props = {
    idUser: undefined,
};

const Style = {
    root: {}
};

class EditUserFN extends React.Component {

    state = {
        user: {
            title: '',
            description: ''
        }
    }

    componentDidMount = () => {
        this.loadData();
    }

    loadData = () => {
        const { AuthStore } = this.props;
        const user = AuthStore.user;
        this.setState({user:user})
    }

    onDataChange = (user) => {
        const finalUser = {
            ...this.state.user,
            ...user,
        }
        this.setState({user:finalUser})
    }

    onSubmit = (evt) => {
        evt.preventDefault();
        const { user } = this.state;

        this.props.editUser(user, response=>{
            this.props.showResponse({
                response : response,
                onSuccess : this.props.onSuccess,
                onError : this.props.onError,
                onFatalError : this.props.onFatalError
            })
        })
    }

    render(){

        const { classes, UserStore, } = this.props;
        const { user } = this.state;

        // Loading
        const isLoading = UserStore.loadingEditUser;
        if(isLoading) return <RLoading />


        return (
            <FormUserPR 
                user={user}
                onDataChange={this.onDataChange}
                onSubmit={this.onSubmit}
            />
        )
    }

}

const mapState = (state) => ({
	UserStore: state.UserStore,
    AuthStore: state.AuthStore,
})

const mapDispatch = {
    ...(UserRedux.action)
}

EditUserFN.defaultProps = Props;
export default compose(
    connect(mapState, mapDispatch),
    withRouter,
    withStyles(Style),
    withResponse
)(EditUserFN)

