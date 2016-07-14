import React, { PropTypes } from 'react'
import { Image, Grid, Rail, Segment } from 'stardust'

const Wrapper = ({ children }) => (
  <Grid className='three column center aligned'>
    <Grid.Column className='centered'>
      <Segment>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
        {children}
      </Segment>
    </Grid.Column>
  </Grid>
)

Wrapper.propTypes = {
  children: PropTypes.node,
}

const RailSizeExample = () => (
  <div>
    <Wrapper>
      <Rail size='tiny' position='left'>Tiny Left Rail</Rail>
      <Rail size='tiny' position='right'>Tiny Right Rail</Rail>
    </Wrapper>
    <Wrapper>
      <Rail size='large' position='left'>Large Left Rail</Rail>
      <Rail size='large' position='right'>Large Right Rail</Rail>
    </Wrapper>
    <Wrapper>
      <Rail size='huge' position='left'>Huge Left Rail</Rail>
      <Rail size='huge' position='right'>Huge Right Rail</Rail>
    </Wrapper>
    <Wrapper>
      <Rail size='massive' position='left'>Massive Left Rail</Rail>
      <Rail size='massive' position='right'>Massive Right Rail</Rail>
    </Wrapper>
  </div>
)

export default RailSizeExample
