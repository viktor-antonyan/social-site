import React, {Component} from "react"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
import FriendsContainer from "./components/Friends/FriendsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/thunk/thunkCreator";
import Loader from "./components/Loader/Loader";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) {
            return <Loader/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Navbar/>
                <Switch>
                    <Route path={'/dialog'} render={() => withSuspense(DialogContainer)}/>
                    <Route path={'/profile/:userId?'}
                           render={() => withSuspense(ProfileContainer)}/>
                    <Route path={'/friends'} render={() => <FriendsContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => withSuspense(LoginContainer)}/>
                    {/*<Route path={'*'} render={() => <div className={'error404'}>404 NOT FOUND</div>}/>*/}
                    <Redirect from="/" to="/profile"/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialize: state.app.initialize
})

export default connect(mapStateToProps, {initializeApp})(App)

