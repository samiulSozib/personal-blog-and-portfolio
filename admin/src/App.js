
import { Fragment } from 'react';
import LoginPage from './pages/LoginPage'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import DashBoard from './pages/DashBoard';
import CreateBlogPage from './pages/CreateBlogPage';
import CreateCategoryPage from './pages/CreateCategoryPage';
import CreateAbout from './pages/CreateAbout';
import CreateProjectPage from './pages/CreateProjectPage';
import CategoryPage from './pages/CategoryPage';
import BlogsPage from './pages/BlogsPage';
import BlogUpdatePage from './pages/BlogUpdatePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectUpdatePage from './pages/ProjectUpdatePage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    
      <BrowserRouter>
        <Switch>
          
        <Route exact path="/about">
            <AboutPage/>
          </Route>
          <Route exact path="/create-blog">
            <CreateBlogPage/>
          </Route>
          <Route exact path="/update-blog">
            <BlogUpdatePage/>
          </Route>
          <Route exact path="/blogs">
            <BlogsPage/>
          </Route>
          <Route exact path="/projects">
            <ProjectsPage/>
          </Route>
          <Route exact path="/create-project">
            <CreateProjectPage/>
          </Route>
          <Route exact path="/update-project">
            <ProjectUpdatePage/>
          </Route>
          <Route exact path="/create-about">
            <CreateAbout/>
          </Route>
          <Route exact path="/create-category">
            <CreateCategoryPage/>
          </Route>
          <Route exact path="/categories">
            <CategoryPage/>
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
