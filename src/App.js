import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {Route, withRouter} from 'react-router-dom'
import './assets/scss/App.scss'
import Music from './components/Music/MusicContainer'
import News from './components/News/News'
import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings'
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/preloader";

class App extends React.Component {


    componentDidMount() {
        this.props.initApp()
    }

    ifSidebar () {
        if (this.props.isAuth === true) {
            document.body.classList.remove('login');
            return <Sidebar/>;
        } else {
            document.body.classList.add('login');
        }
    }

    render() {
        if (!this.props.init) {
            return <Preloader/>
        }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <div className="content">
                    <div className="content-wrap wrap">
                        {this.ifSidebar()}
                        <div className="content-right">
                            <Route path={process.env.PUBLIC_URL + '/profile/:userId?'} render={() => <ProfileContainer/>}/>
                            <Route path={process.env.PUBLIC_URL + '/'} exact render={() => <ProfileContainer/>}/>
                            <Route path={process.env.PUBLIC_URL + '/dialogs'} render={() => <DialogsContainer/>}/>
                            <Route path={process.env.PUBLIC_URL + '/users'} render={() => <UsersContainer/>}/>
                            <Route path={process.env.PUBLIC_URL + '/music'} render={() => <Music/>}/>
                            <Route path={process.env.PUBLIC_URL + '/news'} render={() => <News/>}/>
                            <Route path={process.env.PUBLIC_URL + '/settings'} render={() => <Settings/>}/>
                            <Route path={process.env.PUBLIC_URL + '/login'} render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    init: state.app.init,
    isAuth: state.auth.isAuth
})


export default compose(
    withRouter,
    connect(mapStateToProps, {initApp}))(App);
