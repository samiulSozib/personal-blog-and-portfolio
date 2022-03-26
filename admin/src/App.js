
import { Fragment } from 'react';
import LoginPage from './pages/LoginPage'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import DashBoard from './pages/DashBoard';
import CreateBlogPage from './pages/CreateBlogPage';
import CreateCategoryPage from './pages/CreateCategoryPage';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/">
            <DashBoard/>
          </Route>
          <Route exact path="/create-blog">
            <CreateBlogPage/>
          </Route>
          <Route exact path="/create-category">
            <CreateCategoryPage/>
          </Route>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
