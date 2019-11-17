import React from 'react'
import Profile from './Profile'
import * as Axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile} from '../../redux/profile-reducer'
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        let userIdUri;
        !userId ? userIdUri = 2 : userIdUri = userId.slice(2);

        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userIdUri).then(response => {
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

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter)
