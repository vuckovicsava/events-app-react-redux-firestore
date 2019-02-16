import React, { Component } from 'react';
import uuid from 'uuid';
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList';
import EventForm from '../EventForm';

class EventDashboard extends Component {
  state = {
    isFormOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isFormOpen: true
    });
  };

  handleCancel = () => this.setState({ isFormOpen: false });

  handleCreateEvent = newEvent => {
    newEvent.id = uuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isFormOpen: false
    });
  };

  handleOpenEvent = eventToOpen => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isFormOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.setState({
      events: this.state.events.map(e => {
        if (e.id === updatedEvent.id) {
          return Object.assign({}, updatedEvent);
        } else {
          return e;
        }
      }),
      isFormOpen: false,
      selectedEvent: null
    });
  };

  handleDeleteEvent = id => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== id);
    this.setState({
      events: updatedEvents
    });
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            openEvent={this.handleOpenEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            positive
            content="Create Event"
          />
          {this.state.isFormOpen && (
            <EventForm
              updatedEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              handleCancel={this.handleCancel}
              createEvent={this.handleCreateEvent}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });

export default connect(mapStateToProps)(EventDashboard);
