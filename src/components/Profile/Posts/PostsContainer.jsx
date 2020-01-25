import { addPostActionCreator } from '../../../redux/profile-reducer'
import Posts from './Posts'
import { connect } from 'react-redux'

let mapStateToProps = state => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  }
}
let mapDispatchToProps = dispatch => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    },
  }
}

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostsContainer
