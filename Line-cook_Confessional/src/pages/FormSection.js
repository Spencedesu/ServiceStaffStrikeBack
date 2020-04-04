import React from 'react';
import { Button, Form, Grid, Header,   } from 'semantic-ui-react';
//make static form components -->
const FormSection = () => (
  <div>
    <Grid textAlign="center" >
      <Grid.Column style = {{ maxWidth: 1000}}>
        <Header textAlign="center">
          Please tell your story!
        </Header>
        <Form size="huge">
          <Form.Input
          name="reviewerName" 
          placeholder="name"/>
          <Form.Input
          name="establishment" 
          placeholder="establishment"/>
          <Form.TextArea
          name="review"
          placeholder="Write a review."
          />
          <Button
          // onClick={handleFormSubmit}
          fluid size="large"
          > 
            Submit your Story</Button>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
)
  
   

export default FormSection