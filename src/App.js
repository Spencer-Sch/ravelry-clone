import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SiteUi from './components/Navigation/SiteUi';
import Home from './Pages/Home';
import ProjectDetails from './Pages/ProjectDetails';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <>
      <header>
        <SiteUi />
      </header>
      <main>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/projects/:projectName">
            <ProjectDetails />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
