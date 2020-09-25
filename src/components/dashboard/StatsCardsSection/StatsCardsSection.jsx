import React from 'react'
import { Icon, Image, Statistic, Grid } from 'semantic-ui-react'
import StyledSegment from '../../shared/StyledSegment'

const StatsCardsSection = () => (
  <Grid columns="2">
    <Grid.Row>
      <Grid.Column width="13">
      <StyledSegment divided>
  <Statistic.Group widths="four" divided>
    <Statistic>
      <Statistic.Value>22</Statistic.Value>
      <Statistic.Label>Saves</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value text>
        Three
        <br />
        Thousand
      </Statistic.Value>
      <Statistic.Label>Signups</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Icon name='plane' />5
      </Statistic.Value>
      <Statistic.Label>Flights</Statistic.Label>
    </Statistic>

    <Statistic>
      <Statistic.Value>
        <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' inline circular />
        42
      </Statistic.Value>
      <Statistic.Label>Team Members</Statistic.Label>
    </Statistic>
  </Statistic.Group>

  </StyledSegment>
      </Grid.Column>
      <Grid.Column width="3">
      <StyledSegment>
      <Statistic>
    <Statistic.Value>2,204</Statistic.Value>
    <Statistic.Label>Views</Statistic.Label>
  </Statistic>
  </StyledSegment>
</Grid.Column>
    </Grid.Row>
  </Grid>
 

)

export default StatsCardsSection
