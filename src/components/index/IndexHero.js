import React from 'react';
import { Link } from 'gatsby';

import Jumbotron from '../widgets/Jumbotron'
import { Container } from '../layout-components/grid';
import { Button } from '../layout-components/form';

const IndexHero = (props) => (
  <div className="hero hero-block home-hero">
    <Jumbotron
      nextElementId='network'
      >

      <Container className="hero__header">
        <div>
          <h1 className="hero__title">Association National des Financiers</h1>
          <Button className='hero__link p0' label='Préinscription'>
            <Link to='/preinscription' >Préinscription</Link>
          </Button>
        </div>
      </Container>

      <div className="hero__media">
        <span></span>
      </div>

    </Jumbotron>
  </div>
)

export default IndexHero;
