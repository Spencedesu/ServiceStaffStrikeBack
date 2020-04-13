import React from "react";
import TopNav from "../components/TopNav";
import { Header, Grid, Container, Button, Divider, Message} from "semantic-ui-react"

function About() {
  return(


    <div>
<TopNav />
<Message style={{paddingTop: "4em"}} size="massive">
    
          <Container>
            <Header size="huge" as="h1" style={{fontFamily:'Starjedi'}}>
              About us
            </Header>
            <p>
              This is a template for a simple marketing or informational
              website. It includes a large callout called a jumbotron and three
              supporting pieces of content. Use it as a starting point to create
              something more unique.
            </p>
          </Container>
        </Message>
        <Container>

            <Divider hidden />
          <Grid stackable columns="three">
            <Grid.Column>
              <Header as="h1" style={{fontFamily:'Starjedi'}}>Heading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>

            </Grid.Column>
            <Grid.Column>
              <Header as="h1" style={{fontFamily:'Starjedi'}}>Heading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>

            </Grid.Column>
            <Grid.Column>
              <Header as="h1" style={{fontFamily:'Starjedi'}}>Heading</Header>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>

            </Grid.Column>
          </Grid>
          <Divider hidden />
          <Divider />
        </Container>
      </div>
    );
  }


export default About;