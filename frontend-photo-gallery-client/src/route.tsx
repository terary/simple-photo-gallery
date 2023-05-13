import * as React from "react";
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import { render } from "react-dom";
// import {Home, Foo, Bar} from './Pages';
import "./style.css";
import { SettingsPage } from "./components/settings/SettingsPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/foo">Foo</Link>
            <Link to="/bar">Bar</Link>
          </nav>
          <Routes>
            <Route path="/" element={SettingsPage()} />
            <Route path="/settings" element={SettingsPage()} />
            <Route path="/other" element={SettingsPage()} />
          </Routes>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
