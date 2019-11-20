import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import { BrowserRouter, Route } from 'react-router-dom'
import './scss/App.scss'
import Music from './components/Music/Music'
import News from './components/News/News'
import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings'
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = props => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <div className="content">
          <div className="content-wrap wrap">
            <Sidebar />
            <div className="content-right">
              <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/music" render={() => <Music />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/settings" render={() => <Settings />} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
