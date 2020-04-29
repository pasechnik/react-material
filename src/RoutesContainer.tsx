import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { About } from 'routes/About';
import { Topics } from 'routes/Topics';
import { Home } from 'routes/Home';
import CourseList from './components/CourseList';

export const RoutesContainer = () => (
  <Switch>
    <Route path="/courses">
      <CourseList />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/topics">
      <Topics />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
    <Route path="/" exact>
      <CourseList />
    </Route>
  </Switch>
);
