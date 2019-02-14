import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../nav/NavBar';
import EventDashboard from '../events/EventDashboard';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Container>
          <EventDashboard />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
