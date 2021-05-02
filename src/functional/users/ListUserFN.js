import React from 'react'
import { withStyles } from '@material-ui/core'
import { connect } from "react-redux";
import { compose } from "redux"
import { withRouter } from "react-router-dom"
import ListUserPR from "../../presentation/users/ListUserPR";
import UserRedux from "../../redux/user";
import { RLoading } from "../../components";
import { withResponse } from "../../hoc"

const Props = {};

const Style = {
    root: {}
};

class ListUserFN extends React.Component {

    componentDidMount = () => {
        this.loadData();
    }

    loadData = () => {
        this.props.getAllUser( response => {
            if(response.status !== "SUCCESS"){
                this.props.showResponse({
                    response : response,
                    onSuccess : this.props.onError,
                    onError : this.props.onError,
                    onFatalError : this.props.onFatalError
                })
            }
        });
    }

    render(){

        const { classes, UserStore } = this.props;

        const loading = UserStore.loadingAllUser;
        const allUser = UserStore.allUser || {};
        const userArray = allUser.data;

        if(loading) return <RLoading />

        return (
            <ListUserPR 
                userArray={userArray}
            />
        )
    }

}

const mapState = (state) => ({
	UserStore: state.UserStore
})

const mapDispatch = {
    ...(UserRedux.action)
}

ListUserFN.defaultProps = Props;
export default compose(
	connect(mapState, mapDispatch),
	withStyles(Style),
	withRouter,
    withResponse,
)(ListUserFN)

