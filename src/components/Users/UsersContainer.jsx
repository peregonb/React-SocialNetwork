import { connect } from 'react-redux'
import Users from './Users'
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  totalUsersCountAC,
} from '../../redux/users-reducer'

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
)(Users)
