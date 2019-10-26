import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer'
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
    updateNewPostText: text => {
      let action = updatePostTextActionCreator(text)
      dispatch(action)
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    },
  }
}

const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostsContainer
