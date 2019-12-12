import {connect} from 'react-redux'
import React from 'react'
import Users from './Users'
import Preloader from '../common/Preloader/preloader.js'
import {
    follow,
    unfollow,
    followDisabled, getUsersTC, changeUsersPageTC, followTC, unfollowTC,
} from '../../redux/users-reducer'


class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize, getUsersTC} = this.props;
        getUsersTC(currentPage, pageSize);
    }

    onPageChange = pageNumber => {
        let {currentPage, pageSize, changeUsersPageTC} = this.props;
        changeUsersPageTC(currentPage, pageSize, pageNumber);
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
                        followDisabledValue={this.props.followDisabledValue}
                        unfollowTC={this.props.unfollowTC}
                        followTC={this.props.followTC}
                    />
                )}
            </>
        )
    }
}

let mapStateToProps = state => {
    // debugger
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followDisabledValue: state.usersPage.followDisabledValue,
        followDisabled: state.usersPage.followDisabled
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    followDisabled,
    getUsersTC,
    changeUsersPageTC,
    unfollowTC,
    followTC,
})(UsersContainer)
