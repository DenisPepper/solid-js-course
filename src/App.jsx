import { Route, Router } from "@solidjs/router";
import Home from "./pages/home-page.jsx";
import Dinosaur from "./pages/dinosaur-page.jsx";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/:selectedDinosaur" component={Dinosaur} />
    </Router>
  );
};

export default App;
