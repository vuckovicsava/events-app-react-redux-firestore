import React from 'react';
import EventListItem from './EventLIstItem';

const EventList = ({ events, deleteEvent }) => (
  <div>
    {events.map(e => (
      <EventListItem key={e.id} event={e} deleteEvent={deleteEvent} />
    ))}
  </div>
);

export default EventList;
