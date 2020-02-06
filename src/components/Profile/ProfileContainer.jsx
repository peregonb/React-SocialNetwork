import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {getStatusTC, setUserProfileTC, updateStatusTC} from '../../redux/profile-reducer'
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        let userIdUri;
        !userId ? userIdUri = this.props.loggedPerson.userId : userIdUri = userId.slice(2);

        this.props.setUserProfileTC(userIdUri);
        this.props.getStatusTC(userIdUri)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatusTC}/>
            </div>
        )
    }
}

let mapStateToProps = state => ({
    profile: state.profilePage.profile,
    loggedPerson: state.auth,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)