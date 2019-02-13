import React from 'react';
import EventListItem from './EventLIstItem';

const EventList = ({ events }) => (
  <div>
    <h1>Event List</h1>
    {events.map(e => (
      <EventListItem key={e.id} event={e} />
    ))}
  </div>
);

export default EventList;
