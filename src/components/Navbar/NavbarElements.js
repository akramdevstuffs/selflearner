import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #9bd1f2;
  background-size: cover;
  height: 60px;
  display: flex;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  flex: 1fr 5fr 1fr;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLogo = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 5px 1rem;
  cursor: pointer;
  -webkit-text-stroke-color: black;
  -webkit-text-stroke-width: 1px;
  font-weight: 1000;
  font-size: 1.8em;

  &:hover {
    background: #f8f8f8;
    transition: background-color .25s ease;
    border-radius: 5px;
  }
`;

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  transition: transform .25 ease;
  &.active {
    color: #000000;
  }
  &:hover {
    transform: scale(1.15);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #9bd1f2;
  padding: 10px 22px;
  color: #000000;
  // outline: none;
  border: 2px solid black;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;
