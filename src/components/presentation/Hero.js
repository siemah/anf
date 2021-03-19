import React from 'react';

import Jumbotron from '../widgets/Jumbotron'
import { Container } from '../layout-components/grid'

const Hero = props => (
  <Jumbotron
    className='presentation-hero skew-section-after'
    theme='dark'
    size='semi'
    nextElementId='about'>
    <Container>
      <h1 className="hero__title presentation-hero__title capitalize center">à propos de l'Association Nationale des Financiers</h1>
    </Container>
  </Jumbotron>
)

export default Hero
