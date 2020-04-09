import React from "react";
import TopNav from "../components/TopNav";
import {List, Header, Grid, Input} from "semantic-ui-react"

function Responses() {
  return(

    <div>
      <Grid>
      <TopNav/>
        <Header>
          <h1>List of Responses</h1>
        </Header>
        <Input/>
      <List>

      </List>
      </Grid>
    </div>
  )
}

export default Responses;