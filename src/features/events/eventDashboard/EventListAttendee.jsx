import React from 'react'
import { Image, List } from 'semantic-ui-react'

const EventListAttendee = ({ attendees }) => {
  const { photoURL } = attendees

  return (
    <List.Item>
      <Image size='mini' circular src={photoURL} />
    </List.Item>
  )
}

export default EventListAttendee
