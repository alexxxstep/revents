import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'

const NavBar = ({ setFormOpen }) => {
  const history = useHistory()
  const [authenticated, setAuthenticated] = useState(false)

  function handeSignOut() {
    setAuthenticated(false)
    history.push('/')
  }

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>

        <Menu.Item name='Events' as={NavLink} to='/events' />

        {authenticated && (
          <Menu.Item>
            <Button
              as={NavLink}
              to='/create-event'
              positive
              inverted
              content='Create Event'
            />
          </Menu.Item>
        )}

        {authenticated ? (
          <SignedInMenu signOut={handeSignOut} />
        ) : (
          <SignedOutMenu setAuthenticated={setAuthenticated} />
        )}
      </Container>
    </Menu>
  )
}

export default NavBar
