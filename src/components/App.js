import React from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav/NavBar';
import HomePage from './home/HomePage';
import EventDashboard from './events/EventDashboard';
import EventForm from './events/EventForm';
import EventDetailsPage from './events/EventDetailsPage';
import PeopleDashboard from './user/PeopleDashboard';
import UserDetailsPage from './user/UserDetailsPage';
import SettingsDashboard from './user/Settings/SettingsDashboard';

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <>
              <NavBar />
              <Container>
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailsPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailsPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </>
          )}
        />
      </>
    );
  }
}

export default App;
