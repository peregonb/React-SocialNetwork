import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import "./scss/App.scss";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = props => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="content-wrap wrap">
            <Sidebar />
            <div className="content-right">
              <Route
                path="/profile"
                render={() => (
                  <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                  />
                )}
              />
              <Route
                path="/dialogs"
                render={() => (
                  <Dialogs
                    dialogsPage={props.state.dialogsPage}
                    dispatch={props.dispatch}
                  />
                )}
              />
              <Route path="/music" render={() => <Music />} />
              <Route path="/news" render={() => <News />} />
              <Route path="/settings" render={() => <Settings />} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
