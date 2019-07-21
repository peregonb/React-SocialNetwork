import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import "./scss/App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="content-wrap wrap">
            <Sidebar />
            <div className="content-right">
              {/* <Profile/> */}
              {/* <Dialogs /> */}

              <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
