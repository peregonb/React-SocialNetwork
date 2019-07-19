import React from "react";
import "./scss/App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header-wrap wrap">
          <div className="header-logo">LOGO</div>
          <div className="header-menu">
            <div className="header-item">Пункт 1</div>
            <div className="header-item">Пункт 2</div>
            <div className="header-item">Пункт 3</div>
          </div>
        </div>
      </header>
      <div className="content" />
    </div>
  );
};

export default App;
