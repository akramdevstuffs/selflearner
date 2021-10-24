import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import axios from "../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { change, close } from "../../redux/nav";

const Navbar = () => {
  const isOpen = useSelector((state) => state.nav.isOpen);
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") !== null
  );

  const logout = () => {
    axios.get("/api/logout");
    localStorage.clear();
    setIsLoggedIn(false);
  };

  const closeOpen = () => {
    dispatch(close());
  };

  return (
    <Nav>
      <Logo onClick={closeOpen} to="/">
        Selflearner
      </Logo>
      <Hamburger onClick={() => dispatch(change(!isOpen))}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink onClick={closeOpen} to="/courses">
          Courses
        </MenuLink>
        <MenuLink onClick={closeOpen} to="/uploads">
          <MenuLinkContainer>
            <FaVideo /> Uploads
          </MenuLinkContainer>
        </MenuLink>
        <MenuLink onClick={closeOpen} to="/blogs">
          Blog
        </MenuLink>
        <MenuLink onClick={closeOpen} to="/about">
          About
        </MenuLink>
        {isLoggedIn ? (
          <MenuBtn
            onClick={() => {
              closeOpen();
              logout();
            }}
          >
            Logout
          </MenuBtn>
        ) : (
          <MenuLink onClick={closeOpen} to="/login">
            Login
          </MenuLink>
        )}
      </Menu>
    </Nav>
  );
};

export default Navbar;

const MenuLinkContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  height: 3em;
`;

const MenuLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

const MenuBtn = styled.p`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #67bc98;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #7b7fda;
  }
`;

const Nav = styled.div`
  position: fixed;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  /* position: absolute; */
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled(Link)`
  padding: 1rem 0;
  color: #7b7fda;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
