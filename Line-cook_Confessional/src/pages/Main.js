import React, { Component } from "react";

import Slider from "react-slick";

import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Label,
  Menu,
  Table,
  Container,
  Segment,


} from "semantic-ui-react";


class Main extends Component {


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
        <Grid padded>
          <Grid.Column
            tablet={3}
            computer={3}
            only="tablet computer"
            id="sidebar"
          >
            <Menu vertical borderless fluid text>
              <Menu.Item active as="a">
                Overview
              </Menu.Item>
              <Menu.Item as="a">Reports</Menu.Item>
              <Menu.Item as="a">Analytics</Menu.Item>
              <Menu.Item as="a">Export</Menu.Item>
              <Divider hidden />
              <Menu.Item as="a">Nav item</Menu.Item>
              <Menu.Item as="a">Nav item again</Menu.Item>
              <Menu.Item as="a">One more nav</Menu.Item>
              <Menu.Item as="a">Another nav item</Menu.Item>
              <Menu.Item as="a">More navigation</Menu.Item>
              <Divider hidden />
              <Menu.Item as="a">Macintoch</Menu.Item>
              <Menu.Item as="a">Linux</Menu.Item>
              <Menu.Item as="a">Windows</Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column
            mobile={16}
            tablet={13}
            computer={13}
            floated="right"
            id="content"
          >

              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Dashboard
                </Header>
              </Grid.Row>
              <Grid.Row>

              <Slider {...slickSettings} className="slide">
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
              <Button primary size="huge">
                Sign up today
              </Button>
            </Container>
          </Segment>
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

              <Grid.Row>
                <Header dividing size="huge" as="h1">
                  Section title
                </Header>
              </Grid.Row>
              <Grid.Row>
                <Table singleLine striped selectable unstackable>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                      <Table.HeaderCell>Header</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>1.001</Table.Cell>
                      <Table.Cell>Lorem</Table.Cell>
                      <Table.Cell>ipsum</Table.Cell>
                      <Table.Cell>dolor</Table.Cell>
                      <Table.Cell>sit</Table.Cell>
                    </Table.Row>
                    
                  </Table.Body>
                </Table>
              </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Main;