import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
NavLogo,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />


		<NavLogo activeStyle children="Self Learner" to='/' />
		<NavMenu>
		<NavLink to='/courses' activeStyle>
			Courses
		</NavLink>
		<NavLink to='/about' activeStyle>
			About
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			Blogs
		</NavLink>
		{/* <NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink> */}
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign Up</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
