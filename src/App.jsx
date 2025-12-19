import { Route, Router } from "@solidjs/router";
import Home from "./pages/home-page.jsx";
import Dinosaur from "./pages/dinosaur-page.jsx";
import Operations from "./pages/operations-page.jsx";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/:selectedDinosaur" component={Dinosaur} />
      <Route path="/operations" component={Operations} />
    </Router>
  );
};

export default App;
