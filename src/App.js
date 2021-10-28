import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SiteUi from './components/SiteUi';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <>
      <SiteUi />
      <main>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </main>
    </>
  );
};

export default App;
