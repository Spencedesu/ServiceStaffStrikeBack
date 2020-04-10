import React from "react";
import {Menu, Button} from "semantic-ui-react";

import StaffLogo from "../images/Service Staff/servicestaff2.png";
// import StaffLogo from "../images/Service Staff/SSSBplain.png";

function TopNav() {
  return(
    <Menu borderless inverted fluid fixed="top">
          <Menu.Item header as="a">
          <img src={StaffLogo} style={{width:'100px', height:'35px'}} alt=""/></Menu.Item>
          {/*Below is style for servicestaff2.png --- you would just need to change the Staff logo import above  */}
          {/* <img src={StaffLogo} style={{width:'50px', height:'20px'}}/></Menu.Item> */}
          {/* <Menu.Item>Service Staff Strike Back</Menu.Item> */}
          <Menu.Menu position="right">
            <Menu.Item href = "/" as="a">Home</Menu.Item>
            <Menu.Item>   
              <Button.Group>
                  <Button href="/login" as="a">Login</Button>
                    <Button.Or />
                  <Button primary href="/signup" as="a">Signup</Button>
              </Button.Group>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
  )
  }

  export default TopNav;