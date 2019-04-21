import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Jumbotron from '../widgets/Jumbotron'
import { Container } from '../layout-components/grid';
import { Button } from '../layout-components/form';

const IndexHero = ({className='', ...rest}) => (
  <div className={`hero hero-block home-hero ${className}`} {...rest}>
    <Jumbotron
      nextElementId='about'
      >

      <Container className="hero__header">
        <div>
          <h1 className="hero__title">
            <span className="hero-title__wrapper">Association National des Financiers</span>
          </h1>
          <Button className='hero__link p0' name='preinscription'>
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

IndexHero.propTypes = {
  className: PropTypes.string,
}

export default IndexHero;
