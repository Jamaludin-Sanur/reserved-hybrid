import React from 'react';
import { withStyles } from '@material-ui/core';
import ListNewsFN from "../../functional/news/ListNewsFN";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../../config";
import { connect } from "react-redux";

const Props = {};

const Style = {
    root: {}
};

class ListNewsPage extends React.Component {

    render(){
        const { AuthStore } = this.props;
        const currentUser = AuthStore.user || {}
        const filter = {
            user_id: currentUser.id
        }

        return (
            <ListNewsFN 
                filter={filter}
                onClickCreate={()=>this.props.history.push(ROUTES.MEMBER.CREATE_NEWS)}
            />
        )
    }

}

const mapState = (state) => ({
	AuthStore: state.AuthStore
})

const mapDispatch = {
}

ListNewsPage.defaultProps = Props;
export default compose(
    connect(mapState, mapDispatch),
    withStyles(Style),
    withRouter,
)(ListNewsPage)

