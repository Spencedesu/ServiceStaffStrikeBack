import React from "react";
import {Menu, Input} from "semantic-ui-react";

function TopNav() {
  return(
    <div>
    <Menu borderless inverted fluid fixed="top">
          <Menu.Item src="../../"header as="a">
            Service Staff Strike Back
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input placeholder="Search..." size="small" />
            </Menu.Item>
            <Menu.Item href = "/" as="a">HomePage</Menu.Item>
            <Menu.Item href="/responses" as="a">Responses</Menu.Item>
            <Menu.Item href="/login" as="a">Login</Menu.Item>
            <Menu.Item href="/signup" as="a">Signup</Menu.Item>
          </Menu.Menu>
        </Menu>
    </div>
  )
  }

  export default TopNav;