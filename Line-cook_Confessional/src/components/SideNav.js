import React from "react";
import {Menu, Grid, Divider, Input} from "semantic-ui-react";


function SideNav() {
    return(
        <Grid.Column
        tablet={3}
        computer={3}
        only="tablet computer"
        id="sidebar"
      >
        <Menu vertical borderless fluid text>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>
          <Menu.Item active as="a">
            Responses
          </Menu.Item>
          <Menu.Item as="a">By Recent</Menu.Item>
          <Menu.Item as="a">Favorites</Menu.Item>
          <Menu.Item href="https://www.reddit.com/r/KitchenConfidential/"as="a" target="_blank">r/</Menu.Item>
          <Divider  />
          <Menu.Item active href="/login" as="a">Login</Menu.Item>
          <Menu.Item href="/signup" as="a">Signup</Menu.Item>

          
          <Divider hidden />
          <Menu.Item active href="https://www.google.com/maps"as="a" target="_blank">Google API</Menu.Item>
          <Menu.Item href="https://www.youtube.com/watch?v=U9DyHthJ6LA" target="_blank" as="a">True stories of Cooks who lost it </Menu.Item>
          <Menu.Item as="a">LineCook Confessional</Menu.Item>
        </Menu>
      </Grid.Column>
  )
  }

  export default SideNav;