import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Message, Segment, Icon } from 'semantic-ui-react';
import Logo from '../images/serviceIndustry.png'
import '../fonts/DeathStar-VmWB.ttf'
import Stars from '../images/stars2.jpg'

const SignUp = () => (
<>
  <Grid textAlign='center' style={{ height: '102vh', backgroundImage: "url(" + Stars +")" }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500 }}>
        
    {/* TODO: link close icon to homepage */}

    <Icon corner link name='close' color='grey' size='large' style={{float:'right'}} />
      <Header textAlign='center'>
        <Image src={Logo} style={{height:'200px', width:'400px'}}/>
      </Header>
      <Form size='large'>
        <Segment stacked style={{backgroundColor:'#ececec'}}>
          <Form.Input  placeholder='First Name' />
          <Form.Input  placeholder='Last Name' />
          <Form.Input  fluid icon='at' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Create Password'
            type='password'
          />

          <Button style={{fontFamily:'Starjedi'}}  fluid size='large'>
            Sign up
          </Button>
        </Segment>
      </Form>
      <Message style={{backgroundColor:'#ececec'}}>
        Returning User? <Link to="/login">Login</Link>
      </Message>
    </Grid.Column>
  </Grid>
  </>
)

export default SignUp