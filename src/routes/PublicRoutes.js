import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Contact from '../views/Contact';
import Projects from '../views/Projects';
import Tech from '../views/Tech';
import About from '../views/About';
import ProjectDetails from '../views/ProjectDetails';

function PublicRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/about" component={About} />
      <Route
        exact
        path="/projects"
        component={() => <Projects user={user} />}
      />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/tech" component={Tech} />
      <Route
        exact
        path="/projects/:firebaseKey"
        component={() => <ProjectDetails user={user} />}
      />
    </Switch>
  );
}

PublicRoutes.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

PublicRoutes.defaultProps = {
  user: {},
};

export default PublicRoutes;
