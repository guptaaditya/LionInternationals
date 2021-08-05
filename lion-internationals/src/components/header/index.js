import React from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MenuItems = [
  {key: 1, href: `/users`, label: 'Users', exact: true, isActive: false},
  {key: 2, href: `/groups`, label: 'Groups', isActive: false},
  {key: 3, href: `/user/add`, label: 'Add user', exact: true, isActive: false},
]

const Header = (props) => {
  return (
    <Navbar>
      <Nav>
        {MenuItems.map((i, index) => (
          <NavLink to={i.href}>
            {i.label}
          </NavLink>
        ))}
      </Nav>
    </Navbar>
  )
}

const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 3rem;
  background: cornsilk;

  a {
    text-decoration: none;
    padding: 0.8em;
    font-size: 1.1em;
  }
`
export default Header