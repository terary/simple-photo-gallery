import * as React from "react";
import {
  HashRouter as Router,
  BrowserRouter,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import { SlideShow, FadeShow } from "./components/SlideShow";

import { render } from "react-dom";
// import {Home, Foo, Bar} from './Pages';
// import "./style.css";
import { SettingsPage } from "./components/settings/SettingsPage";

// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <nav>
//             <Link to="/">Home</Link>
//             <Link to="/foo">Foo</Link>
//             <Link to="/bar">Bar</Link>
//           </nav>
//           <Routes>
//             <Route path="/" element={SettingsPage()} />
//             <Route   path="/settings" element={SettingsPage()} />
//             <Route path="/other" element={SettingsPage()} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }
const App = () => {
  {
    /* <BrowserRouter basename="/calendar">
    <Link to="/today"/> // renders <a href="/calendar/today">
    <Link to="/tomorrow"/> // renders <a href="/calendar/tomorrow">
    ...
</BrowserRouter> */
  }
  const TheBrowserRouter = () => {
    return (
      <BrowserRouter>
        <div>
          {window.location.pathname != "/" && (
            <nav>
              <Link to="/">Home</Link>
              <Link to="/settings">Foo</Link>
              <Link to="/settings">YO:{window.location.pathname}</Link>
            </nav>
          )}
          <Routes>
            <Route path="/" element={FadeShow()} />
            <Route path="/settings" element={SettingsPage()} />
            <Route path="/other" element={SettingsPage()} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  };
  const TheRouter = () => {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/settings">Foo</Link>
            <Link to="/settings">YO: {window.location.pathname}</Link>
          </nav>
          <Routes>
            <Route path="/" element={FadeShow()} />
            <Route path="/settings" element={SettingsPage()} />
            <Route path="/other" element={SettingsPage()} />
          </Routes>
        </div>
      </Router>
    );
  };

  return <TheBrowserRouter />;
  // return <TheRouter />;
};

export default App;

// render(<App />, document.getElementById("root"));
