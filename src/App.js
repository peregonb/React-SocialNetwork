import React from 'react'
import Firebase from 'firebase'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import { BrowserRouter, Route } from 'react-router-dom'
import './scss/App.scss'
import Music from './components/Music/Music'
import News from './components/News/News'
import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings'

const App = props => {
  console.log(Firebase)
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="content-wrap wrap">
            <Sidebar />
            <div className="content-right">
              <Route path="/profile" render={() => <Profile />} />
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
