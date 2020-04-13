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
              Welcome to SSSB.
            </Header>
            <p>
              The first platform created exclusively for the service staff. Check out other industry folks' stories, share your own, or ...Strike Back!
            </p>
          </Container>
        </Message>
        <Container>

            <Divider hidden />
          <Grid stackable columns="three">
            <Grid.Column>
              <Header as="h1" style={{fontFamily:'Starjedi'}}>Haters gonna hate</Header>
              <p>
               Who will critique the critics? Yelp offers people a forum to voice praise or dissent for local businesses. But to get the truth, we also need to hear it from service side.
              </p>

            </Grid.Column>
            <Grid.Column>
              <Header as="h1" style={{fontFamily:'Starjedi'}}>Strike Back!</Header>
              <p>
               Dealing with the public you're bound to have your share of friendly people and trash-talkers. Now share your side of the story.
              </p>

            </Grid.Column>
            <Grid.Column>
              <Header as="h1" style={{fontFamily:'Starjedi'}}>Linecook Confessional</Header>
              <p>
               Stories submitted by the service staff. Read others' recounts of horror stories of nightmare patrons and truths of what goes on behind the scenes.
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