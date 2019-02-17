import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { Segment, Form, Button } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../../../store/actions/eventActions';

class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  handleChange = e => {
    const updatedEvent = this.state.event;
    updatedEvent[e.target.name] = e.target.value;
    this.setState({ event: updatedEvent });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: uuid(),
        hostPhotoURL: '/assets/user.png'
      };
      this.props.createEvent(newEvent);
      this.props.history.push('/events');
    }
  };

  render() {
    const { title, date, city, venue, hostedBy } = this.state.event;

    return (
      <Segment>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              name="title"
              value={title}
              onChange={this.handleChange}
              placeholder="Event Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name="date"
              value={date}
              onChange={this.handleChange}
              placeholder="Event Date"
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name="city"
              value={city}
              onChange={this.handleChange}
              placeholder="City event is taking place"
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name="venue"
              value={venue}
              onChange={this.handleChange}
              placeholder="Enter the Venue of the event"
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name="hostedBy"
              value={hostedBy}
              onChange={this.handleChange}
              placeholder="Enter the name of person hosting"
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={this.props.history.goBack} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };

  if (eventId && state.events.length > 0) {
    event = state.events.find(e => e.id === eventId);
  }

  return { event };
};

const actions = {
  createEvent,
  updateEvent
};

export default connect(
  mapStateToProps,
  actions
)(EventForm);
