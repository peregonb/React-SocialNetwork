import { connect } from 'react-redux'
import React from 'react'
import * as Axios from 'axios'
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

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    ).then(response => {
      this.props.setIsFetching(false)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange = pageNumber => {
    this.props.setIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    ).then(response => {
      this.props.setIsFetching(false)
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
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
  { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching }
)(UsersContainer)
