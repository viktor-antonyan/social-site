import React, {Component} from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {
    profileStatus,
    profileData,
    setProfileStatus,
    changeMyProfilePhoto,
    saveProfile
} from "../../redux/thunk/thunkCreator";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends Component {
    getProfileParams() {
        const userId = this.props.match.params.userId || this.props.userId
        this.props.profileData(userId)
        this.props.profileStatus(userId)
    }

    componentDidMount() {
        this.getProfileParams()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.getProfileParams()
        }
    }

    render() {
        return (
            <Profile {...this.props} profileId={this.props.match.params.userId}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileData.profile,
        status: state.profileData.status,
        userId: state.auth.id,
    }
}

// export default withAuthRedirect(connect(mapStateToProps,{profileData})(withRouter(ProfileContainer)))
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {profileData, profileStatus, setProfileStatus, changeMyProfilePhoto, saveProfile}),
    withRouter
)(ProfileContainer)