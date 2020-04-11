import React, { Component } from "react";
import FormSection from "../components/FormSection";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";

import Slider from "react-slick";


import "semantic-ui-css/semantic.min.css";

//Import semantic components here if you want to use them in the page

import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Icon,
  Input,
  List,
  ListItem,
  Menu,
  Container,
  Segment,
  GridRow,
} from "semantic-ui-react";


class Main extends Component {


//settings for the carousel

  render() {
    const slickSettings = {
      autoplay: true,
      dots: true,
      speed: 1000,
      pauseOnHover: true,
      infinite: true,
      centerPadding: "30px",
      swipeToSlide: true,
    };


    return (
      <div className="Main">
        <Grid padded className="tablet computer only">
          {/* Top Nav */}
          <TopNav/>
        </Grid>

        {/* Top Nav -MOBILE */}

        <Grid padded className="mobile only">
          <Menu borderless inverted fluid fixed="top">
            <Menu.Menu position="right">
              <Menu.Item>
                <Button
                  basic
                  inverted
                  icon
                  toggle
                >
                  <Icon name="content" />
                </Button>
              </Menu.Item>
            </Menu.Menu>
            <Menu
              borderless
              fluid
              inverted
              vertical
            >
              <Menu.Item as="a">Dashboard</Menu.Item>
              <Menu.Item as="a">Settings</Menu.Item>
              <Menu.Item as="a">Profile</Menu.Item>
              <Menu.Item as="a">Help</Menu.Item>
              <Divider fitted />
              <Menu.Item>
                <Input placeholder="Search..." size="small" />
              </Menu.Item>
            </Menu>
          </Menu>
        </Grid>

        {/* Side-Nav */}
        <Grid padded>
        <SideNav />


      {/* Main Page Header/Title*/}
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >
              <Grid.Row>
                {/* <Header dividing size="huge" as="h2">
                  Welcome to the site that gives the yelped at, a chance to plead their case
                </Header> */}
              </Grid.Row>
              <Grid.Row>

            {/* Carousel*/}

              <Slider {...slickSettings} className="slide"> 
              
              {/* Slide*/}
          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1">
                Example headline.
              </Header>
              <p>
                Note: If you're viewing this page via a <code>file://</code>
                URL, the "next" and "previous" Glyphicon buttons on the left and
                right might not load/display properly due to web browser
                security rules.
              </p>
              <Button href="./signup" primary size="huge">
                Sign up today!
              </Button>
            </Container>
          </Segment>

          {/* Slide*/}
          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1">
                Another example headline.
              </Header>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <Button primary size="huge">
                Learn more
              </Button>
            </Container>
          </Segment>

          {/* Slide*/}
          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1">
                One more for good measure
              </Header>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
              <Button primary size="huge">
                Browse gallery
              </Button>
            </Container>
          </Segment>

        </Slider>

      </Grid.Row>

          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default Main;