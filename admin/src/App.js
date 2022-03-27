
import { Fragment } from 'react';
import LoginPage from './pages/LoginPage'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import DashBoard from './pages/DashBoard';
import CreateBlogPage from './pages/CreateBlogPage';
import CreateCategoryPage from './pages/CreateCategoryPage';
import CreateAbout from './pages/CreateAbout';


function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/create-blog">
            <CreateBlogPage/>
          </Route>
          <Route exact path="/create-about">
            <CreateAbout/>
          </Route>
          <Route exact path="/create-category">
            <CreateCategoryPage/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/">
            <DashBoard/>
          </Route>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
