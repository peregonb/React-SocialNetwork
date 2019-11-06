import { connect } from 'react-redux'
import React from 'react'
import * as Axios from 'axios'
import Users from './Users'
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  totalUsersCountAC,
} from '../../redux/users-reducer'

class UsersContainer extends React.Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    ).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    ).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChange={this.onPageChange}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    )
  }
}

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  }
}
let mapDispatchToProps = dispatch => {
  return {
    follow: userID => {
      dispatch(followAC(userID))
    },
    unfollow: userID => {
      dispatch(unfollowAC(userID))
    },
    setUsers: users => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: pageNumber => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: totalUsersCount => {
      dispatch(totalUsersCountAC(totalUsersCount))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer)
