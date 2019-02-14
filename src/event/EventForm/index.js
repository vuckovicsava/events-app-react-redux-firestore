import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
};

class EventForm extends Component {
  state = {
    event: emptyEvent
  };

  componentDidMount() {
    if (this.props.selectedEvent) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedEvent !== prevState.event) {
      return { event: nextProps.selectedEvent || emptyEvent };
    } else return null;
  }

  handleChange = e => {
    const updatedEvent = this.state.event;
    updatedEvent[e.target.name] = e.target.value;
    this.setState({ event: updatedEvent });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.event.id) {
      this.props.updatedEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };

  render() {
    const { handleCancel } = this.props;
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
          <Button onClick={handleCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
