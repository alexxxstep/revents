import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react'
import EventListAttendee from './EventListAttendee'
import { deleteEvent } from '../eventActions'

const EventListItem = ({ event }) => {
  const { title, hostedBy, description, hostPhotoURL, date, venue, attendees } = event

  const dispatch = useDispatch()

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
          onClick={() => dispatch(deleteEvent(event.id))}
          color='orange'
          floated='right'
          content='Delete'
        />
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </Segment.Group>
  )
}

export default EventListItem
