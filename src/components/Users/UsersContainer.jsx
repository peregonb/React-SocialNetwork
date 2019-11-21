import {connect} from 'react-redux'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/preloader.js'
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
} from '../../redux/users-reducer'
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize, setIsFetching, setUsers, setTotalUsersCount} = this.props;
        setIsFetching(true);
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            setIsFetching(false);
            setUsers(data.items);
            setTotalUsersCount(data.totalCount);
        })
    }

    onPageChange = pageNumber => {
        let {pageSize, setIsFetching, setUsers, setCurrentPage} = this.props;
        setCurrentPage(pageNumber);
        setIsFetching(true);
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            setIsFetching(false);
            setUsers(data.items);
        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader/>
                ) : (
                    <Users
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        onPageChange={this.onPageChange}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                    />
                )}
            </>
        )
    }
}

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(
    mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching}
)(UsersContainer)
