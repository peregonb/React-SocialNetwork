import React from 'react'
import Profile from './Profile'
import * as Axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {
    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/4`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
})

export default connect(
    mapStateToProps,
    {setUserProfile}
)(ProfileContainer)
