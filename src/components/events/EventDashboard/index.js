import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import EventList from '../EventList';
import { deleteEvent } from '../../../store/actions/eventActions';
import EventActivity from '../EventActivity';

class EventDashboard extends Component {
  handleDeleteEvent = id => () => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.firestore.ordered.events
  };
};

export default connect(
  mapStateToProps,
  { deleteEvent }
)(firestoreConnect([{ collection: 'events' }])(EventDashboard));
