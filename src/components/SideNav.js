import React from "react";
import {Menu, Grid, Divider, Icon, Dropdown} from "semantic-ui-react";
import Searchbar from "./Searchbar";


function SideNav() {
    return(
        <Grid.Column 
        tablet={3}
        computer={3}
        only="tablet computer"
        id="sidebar"
      >
        <Menu vertical borderless fluid text>

        <Menu.Item style={{textAlign: "center"}}>
        <Searchbar placeholder="Search..." />
        </Menu.Item>

          <Menu.Item active href="/responses" as="a">
            Responses
          </Menu.Item>
          <Menu.Item as="a"><Icon name='sort numeric up'/>By Recent</Menu.Item>
          <Menu.Item as="a"><Icon name='heart' size='small' />Favorites</Menu.Item>
          <Menu.Item href="https://www.reddit.com/r/KitchenConfidential/"as="a" target="_blank"><Icon name='reddit alien'/>r/</Menu.Item>
          <Divider  />

          <Menu.Item active as="a">
          <Dropdown text='Threads'>
          <Dropdown.Menu style={{left:'10px'}}>
            <Dropdown.Item icon='star' text='Featured' />
            <Dropdown.Item icon='fire' text='Most Popular' />
            <Dropdown.Item icon='archive' text='Newest' />
          </Dropdown.Menu>
        </Dropdown>
          </Menu.Item>
          <Menu.Item href="/piece" as="a">Strike Back! (Say Your Peace)</Menu.Item>
          <Menu.Item href="/story"as="a">Share a Story</Menu.Item>
          <Menu.Item href="/linecook"as="a">LineCook Confessional</Menu.Item>
          <Menu.Item href="/serversHate"as="a">Servers HATE...</Menu.Item>
          <Divider  />


          
          <Divider hidden />
          <Menu.Item active href="https://www.google.com/maps"as="a" target="_blank">Google API</Menu.Item>
    
        </Menu>
      </Grid.Column>
  )
  }

  export default SideNav;