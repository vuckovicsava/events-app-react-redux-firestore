import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import uuid from 'uuid';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { createEvent, updateEvent } from '../../../store/actions/eventActions';
import TextInput from '../../common/Textinput';
import TextArea from '../../common/TextArea';
import SelectInput from '../../common/SelectInput';

const categories = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' }
];

class EventForm extends Component {
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
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={this.handleSubmit}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Event Name"
              />
              <Field
                name="category"
                type="text"
                component={SelectInput}
                options={categories}
                placeholder="What is your event about?"
              />
              <Field
                name="desctiprion"
                type="text"
                rows={3}
                component={TextArea}
                placeholder="Tell us about your event"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Event City"
              />
              <Field
                name="date"
                type="text"
                component={TextInput}
                placeholder="Event Date"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Event Venue"
              />

              <Button positive type="submit">
                Submit
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
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
)(reduxForm({ form: 'eventForm' })(EventForm));
