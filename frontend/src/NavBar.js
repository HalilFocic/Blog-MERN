import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

const Example = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Another Link</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Example;
