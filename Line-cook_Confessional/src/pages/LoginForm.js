import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button, Form, Grid, Header, Icon, Image, Message, Segment } from 'semantic-ui-react';
import Logo from '../images/serviceIndustry.png'
import '../fonts/DeathStar-VmWB.ttf'
import Stars from '../images/stars2.jpg'

const LoginForm = () => (
<div style={{}}>
  <Grid textAlign='center' style={{ height: '102vh', backgroundImage: "url(" + Stars +")" }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500 }}>
              
    {/* TODO: link close icon to homepage */}

    <Icon corner link name='close' color='grey' size='large' style={{float:'right'}} />
      <Header textAlign='center'>
        <Image src={Logo} style={{height:'200px', width:'400px'}}/>
      </Header>
      <Form size='large' >
        <Segment stacked style={{backgroundColor:'#ececec'}}>
          <Form.Input  fluid icon='at' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button style={{fontFamily:'Starjedi'}}  fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message style={{backgroundColor:'#ececec'}}>
        New to us? <Link to="/signup">Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
</div>
)

export default LoginForm