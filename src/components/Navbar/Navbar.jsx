import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
   Nav,
   NavContainer,
   NavLogo,
   NavIcon,
   MobileIcon,
   NavMenu,
   NavItem,
   NavLink,
   NavItemBtn,
   NavBtnLink,
} from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'

function Navbar() {
   const [click, setClick] = useState(false)
   const [button, setButton] = useState(true)

   const handleNavClick = () => setClick(!click)

   const showButton = () => {
      if (window.innerWidth <= 960) {
         setButton(false)
      } else {
         setButton(true)
      }
   }

   useEffect(() => {
      showButton()
   }, [])

   window.addEventListener('resize', showButton)

   return (
      <>
         <Nav>
            <NavContainer>
               <NavLogo to='/'>
                  <NavIcon />
                  ULTRA
               </NavLogo>

               <IconContext.Provider value={{ color: '#fff' }}>
                  <MobileIcon onClick={handleNavClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
               </IconContext.Provider>

               <NavMenu click={click}>
                  <NavItem onClick={handleNavClick}>
                     <NavLink to='/'>Home</NavLink>
                  </NavItem>
                  <NavItem onClick={handleNavClick}>
                     <NavLink to='/services'>Services</NavLink>
                  </NavItem>
                  <NavItem onClick={handleNavClick}>
                     <NavLink to='/products'>Products</NavLink>
                  </NavItem>

                  <NavItemBtn>
                     {button ? (
                        <NavBtnLink to='/sign-up'>
                           <Button primary>SIGN UP</Button>
                        </NavBtnLink>
                     ) : (
                        <NavBtnLink to='/sign-up'>
                           <Button onClick={handleNavClick} fontBig primary>
                              SIGN UP
                           </Button>
                        </NavBtnLink>
                     )}
                  </NavItemBtn>
               </NavMenu>
            </NavContainer>
         </Nav>
      </>
   )
}

export default Navbar
