
import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/logo.png";

const Nav = styled.nav`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #ddd;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLogo></NavLogo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
