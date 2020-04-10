import React from 'react';
import { Button, Form, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';
import Logo from '../images/Service Staff/servicestaff3.png'
import "../fonts/Starjedi.ttf";
import Stars from '../images/stars2.jpg'
import TopNav from '../components/TopNav';

const LoginForm = () => (
<div style={{}}>
  <TopNav/>
  <Grid textAlign='center' style={{ height: '102.25vh', backgroundImage: "url(" + Stars +")" }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500 }}>

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
    </Grid.Column>
  </Grid>
</div>
)

export default LoginForm