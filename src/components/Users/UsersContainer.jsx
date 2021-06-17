import {connect} from "react-redux";
import React, {Component} from "react";
import Users from "./Users";
import Loader from "../Loader/Loader";
import {follow, getAllUsers, unfollow} from "../../redux/thunk/thunkCreator";
import {compose} from "redux";
import {
    getAllUsersCount,
    getCurrentPage, getIsDisabled,
    getIsFetching,
    getPageSize,
    getUsers
} from "../../redux/reducers/usersSelector";

class UsersApiContainer extends Component {
    componentDidMount() {
        this.props.getAllUsers(this.props.currentPage, this.props.pageSize)
    }

    // eslint-disable-next-line no-undef,no-restricted-globals
    scroll = (page) => {
        this.props.getAllUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <div>
                {this.props.isFetching ? <Loader/> :
                    <Users {...this.props} scroll={this.scroll}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        allUsersCount: getAllUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isDisabled: getIsDisabled(state)
    }
}

export const UsersContainer = compose(
    connect(mapStateToProps,
        {getAllUsers, follow, unfollow})
)(UsersApiContainer)