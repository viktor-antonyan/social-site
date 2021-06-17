import Friends from "./Friends";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        friends: state.friendData.friends
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps)
)(Friends)