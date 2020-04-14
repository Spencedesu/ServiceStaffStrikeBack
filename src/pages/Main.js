import React, { Component } from "react";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";

import Slider from "react-slick";


import "semantic-ui-css/semantic.min.css";

//Import semantic components here if you want to use them in the page

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Menu,
  Container,
  Segment,
} from "semantic-ui-react";


class Main extends Component {


//settings for the carousel

  render() {
    const slickSettings = {
      autoplay: true,
      autoplaySpeed: 4000,
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
              <Container>
              <Slider {...slickSettings} className="slide"> 
              
                        {/* Slide*/}
          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1" style={{fontFamily:'Starjedi'}} >
                Welcome to SSSB!
              </Header>
              <p>
                The first platform created exclusively for the Service Staff. 
              </p>

              <p1> <Icon name='arrow left'/>
               Check out other peoples stories, share your own, or...Strike Back!
              </p1>
            </Container>
          </Segment>
          
          {/* Slide*/}
          <Segment inverted vertical textAlign="center" id="slide1">
          
            <Container text className="active">
              <Header inverted as="h1" style={{fontFamily:'Top Secret', color: 'firebrick'}}>
                Line Cook Confidential
              </Header>
              <p>
                Checkout our Featured Thread of the Week!
              </p> 

              <Button primary size="huge" href="/linecook">
                Take Me There!
              </Button>            
            </Container>
          </Segment>
          


          {/* Slide*/}
          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1" style={{fontFamily:'Starjedi'}} >
                Strike Back!
              </Header>
              <p>
                This is where you can voice your side of any horrible or unjust review
              </p>
              <Button primary size="huge" href = "/piece">
                Take Me There!
              </Button>
            </Container>
          </Segment>

          {/* Slide*/}
          <Segment inverted vertical textAlign="center">
            <Container text className="active">
              <Header inverted as="h1" style={{fontFamily:'Naughty Scratch'}}>
              Servers <span style={{fontFamily:'Naughty Scratch'}}> Hate...</span>
              </Header>
              <p>
                Share your BIGGEST peeves of working in the service industry. 
              </p>
              <Button primary size="huge" href="/serversHate">
                Take Me There!
              </Button>
            </Container>
          </Segment>

        </Slider>
        </Container>

      </Grid.Row>

          </Grid.Column>
        </Grid>

      </div>
    );
  }
}

export default Main;