import React from 'react';
import { Segment, List, Label, Item } from 'semantic-ui-react';

const EventDetailsSidebar = ({ attendees }) => {
  const isHost = false; // temp

  return (
    <div>
      <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length}{' '}
        {attendees && attendees.length === 1 ? 'Person' : 'People'} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees &&
            attendees.map(attendee => (
              <Item style={{ position: 'relative' }} key={attendee.id}>
                {isHost && (
                  <Label
                    style={{ position: 'absolute' }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}
                <Item.Image
                  size="tiny"
                  floated="left"
                  src={attendee.photoURL}
                />
                <Item.Content verticalAlign="middle">
                  <Item.Header as="h3">
                    <a href="#">{attendee.name}</a>
                  </Item.Header>
                </Item.Content>
              </Item>
            ))}
        </List>
      </Segment>
    </div>
  );
};

export default EventDetailsSidebar;
