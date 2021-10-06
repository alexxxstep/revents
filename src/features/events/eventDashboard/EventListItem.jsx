import React from 'react'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'

const EventListItem = ({ event, selectEvent, deleteEvent }) => {
  const { title, hostedBy, description, hostPhotoURL, date, venue, attendees } = event

  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={hostPhotoURL} />
            <Item.Content>
              <Item.Header content={title} />
              <Item.Description> Hosted by {hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name='clock' /> {date}
          <Icon name='marker' /> {venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {attendees.map((i) => (
            <EventListAttendee key={i.id} attendees={i} />
          ))}
        </List>
      </Segment>

      <Segment clearing>
        <div>{description}</div>
        <Button
          onClick={() => deleteEvent(event.id)}
          color='orange'
          floated='right'
          content='Delete'
        />
        <Button
          onClick={() => selectEvent(event)}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </Segment.Group>
  )
}

export default EventListItem
