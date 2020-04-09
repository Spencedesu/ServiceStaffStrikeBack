import React, { Component } from "react";
import FormSection from "../components/FormSection";

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

          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              Project name
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input placeholder="Search..." size="small" />
              </Menu.Item>
              <Menu.Item as="a">Dashboard</Menu.Item>
              <Menu.Item as="a">Settings</Menu.Item>
              <Menu.Item as="a">Profile</Menu.Item>
              <Menu.Item as="a">Help</Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid>

        {/* Top Nav -MOBILE */}

        <Grid padded className="mobile only">
          <Menu borderless inverted fluid fixed="top">
            <Menu.Item header as="a">
              Project Name
            </Menu.Item>
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
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
            <Menu vertical borderless fluid text>
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
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >

          {/* Main Page Header/Title*/}

              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Dashboard
                </Header>
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

        <Divider section hidden />

          {/* Section after carousel*/}
              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Write a Review
                </Header>
              </Grid.Row>
              <Grid.Row>
              {/* CONTENT HERE (FORM?)*/}
                <FormSection/>
              </Grid.Row>

          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default Main;