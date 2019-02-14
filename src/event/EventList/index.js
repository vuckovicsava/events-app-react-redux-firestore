import React from 'react';
import EventListItem from './EventLIstItem';

const EventList = ({ events, openEvent, deleteEvent }) => (
  <div>
    <h1>Event List</h1>
    {events.map(e => (
      <EventListItem
        key={e.id}
        event={e}
        openEvent={openEvent}
        deleteEvent={deleteEvent}
      />
    ))}
  </div>
);

export default EventList;
