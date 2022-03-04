import { Fragment } from "react";
import About from "./pages/About";
import AllPosts from "./pages/AllPosts";
import AllProjects from "./pages/AllProjects";
import HomePage from "./pages/HomePage";
import SinglePost from "./pages/SinglePost";
import SingleProject from "./pages/SingleProject";
import {BrowserRouter,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <Fragment>
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/all-posts">
          <AllPosts/>
        </Route>
        <Route exact path="/all-projects">
          <AllProjects/>
        </Route>
        <Route exact path="/all-projects/:id">
          <SingleProject/>
        </Route>
        <Route exact path="/all-posts/:id">
          <SinglePost/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
     </BrowserRouter>
    </Fragment>
  );
}

export default App;
