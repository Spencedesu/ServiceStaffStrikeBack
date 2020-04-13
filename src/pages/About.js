import React from "react";
import TopNav from "../components/TopNav";
import { Header, Grid, Segment} from "semantic-ui-react"
import FormSection from "../components/FormSection";

function About() {
  return(
    <div>
      <Grid padded>
        <Grid.Column
        mobile={16}
        computer= {16}>
          <TopNav/>
          <Grid.Row>
            <Header dividing size="huge" as="h1">
            About
            </Header>
          </Grid.Row>
          
        </Grid.Column>
      </Grid>
    </div>
  )
}

export default About;