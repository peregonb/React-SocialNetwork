import Dialogs from './Dialogs'
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'

let mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = dispatch => {
  return {
    updateNewMessageTextAction: textareaElement => {
      dispatch(updateNewMessageTextActionCreator(textareaElement))
    },
    sendMessage: () => {
      dispatch(addMessageActionCreator())
    },
  }
}

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs)

export default DialogsContainer
