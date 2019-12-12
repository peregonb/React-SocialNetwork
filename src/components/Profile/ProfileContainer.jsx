import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {setUserProfileTC} from '../../redux/profile-reducer'
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        let userIdUri;
        !userId ? userIdUri = 10 : userIdUri = userId.slice(2);

        this.props.setUserProfileTC(userIdUri);
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

export default connect(mapStateToProps, {setUserProfileTC})(ProfileContainerWithRouter)
