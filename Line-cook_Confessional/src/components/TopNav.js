import React from "react";
import {Menu, Button} from "semantic-ui-react";

import StaffLogo from "../images/Service Staff/servicestaff1.png";

function TopNav() {
  return(
    <div>
    <Menu borderless inverted fluid fixed="top">
          <Menu.Item header as="a">
           <img alt="ssStrikesback"src={require("../images/serviceIndustry.png")}/>
          </Menu.Item>

            {/* TODO: add image logo */}
          {/* <img src={StaffLogo} style={{width:'100px', height:'40px'}}/> */}
          
          {/* </Menu.Item> */}
          <Menu.Menu position="right">
            <Menu.Item href = "/" as="a">Home</Menu.Item>
            <Menu.Item href="/login" as="a"><Button>Login</Button></Menu.Item>
            <Menu.Item href="/signup" as="a"><Button primary>Sign up</Button></Menu.Item>
          </Menu.Menu>
        </Menu>
    </div>
  )
  }

  export default TopNav;