import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import {BrowserRouter, Route} from 'react-router-dom'
import './assets/scss/App.scss'
import Music from './components/Music/MusicContainer'
import News from './components/News/News'
import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings'
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <div className="content">
                    <div className="content-wrap wrap">
                        <Sidebar/>
                        <div className="content-right">
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App
