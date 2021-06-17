import Dialog from "./Dialog";
import {addMessage} from "../../redux/actions";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        userData: state.dialogData.userData,
        usersMessages: state.dialogData.usersMessages,
        currentMessage: state.dialogData.currentMessage,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {addMessage})
)(Dialog)
