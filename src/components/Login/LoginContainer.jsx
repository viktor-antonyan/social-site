import React, {Component} from "react"
import {Login} from "./Login";
import {connect} from "react-redux";
import {authLogin} from "../../redux/thunk/thunkCreator";
import {Redirect} from "react-router-dom";

class LoginContainer extends Component {
    // eslint-disable-next-line no-undef
    onSubmit = (formData) => {
        const {email, password, rememberMe, captcha} = formData
        this.props.authLogin(email, password, rememberMe, captcha)
    }

    render() {
        if (this.props.isAuth) {
            return <Redirect to="/profile"/>
        }

        return <Login onSubmit={this.onSubmit} captcha={this.props.captcha}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha,
})
export default connect(mapStateToProps, {authLogin})(LoginContainer)