import React from "react";
import TopNav from "../components/TopNav";
import { Header, Grid, Segment} from "semantic-ui-react"

function ShareStory() {
  return(
    <div>
      <Grid padded>
        <TopNav/>
        <Grid.Column
        mobile={16}
        computer= {16}>
          <TopNav/>
          <Grid.Row>
            <Header dividing size="huge" as="h1">
            The Response Page
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Segment id="form-section"style={{minHeight:400}}>Well Hello There

            </Segment>
            <Segment >Well Hello There</Segment>
            <Segment >Well Hello There</Segment>
            <Segment >Well Hello There</Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default ShareStory;