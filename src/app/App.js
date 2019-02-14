import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import NavBar from '../nav/NavBar';
import HomePage from '../home/HomePage';
import EventDashboard from '../events/EventDashboard';
import EventDetailsPage from '../events/EventDetailsPage';
import PeopleDashboard from '../user/PeopleDashboard';
import UserDetailsPage from '../user/UserDetailsPage';
import SettingsDashboard from '../user/Settings/SettingsDashboard';
import EventForm from '../events/EventForm';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/events" component={EventDashboard} />
          <Route path="/event/:id" component={EventDetailsPage} />
          <Route path="/people" component={PeopleDashboard} />
          <Route path="/profile/:id" component={UserDetailsPage} />
          <Route path="/settings" component={SettingsDashboard} />
          <Route path="/createEvent" component={EventForm} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
