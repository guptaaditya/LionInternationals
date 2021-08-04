import React from 'react'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const headerMenu = [
  {key: 1, href: `/users`, label: 'Users', exact: true},
  {key: 2, href: `/groups`, label: 'Groups'},
  {key: 3, href: `/user/add`, label: 'Add user', exact: true},
]

const Header = (props) => {
  let activeMenu = headerMenu.find(i => {
    return (props.location.pathname.indexOf(i.href) === 0)
  })
  if(activeMenu) {
    activeMenu = activeMenu.key
  }
  else activeMenu = 0
  
  return (
    <Navbar>
      <Nav>
      {headerMenu.map((i, index) => (
        <NavLink to={i.href}>{i.label}</NavLink>
      ))}
      </Nav>
    </Navbar>
  )
};

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