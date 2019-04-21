import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Container, Row, Col } from '../layout-components/grid';
import { Button } from '../layout-components/form';

const About = ({className='', ...rest}) => (
  <div className={`about-block ${className}`} {...rest}>
  <Container>
    <Row className='mb0'>
      <Col className="network-block_left" s='12' m='6'>
        <h2 className="network-block__title capitalize">à propos de l’ANF</h2>
        <p className="network-block__description">
        L’Association Nationale des Financiers, ANF, est une Association Nationale
        but non lucratif, dotée de la personnalité morale et de l’autonomie financière.
        </p>
      </Col>
      <Col className="network-block_right"s='12' m='6'>
        <p className="network-block__description">
          Agrée par son excellence Monsieur le Ministère de l’Intérieur et des
          Collectivités Locales en date du 29 novembre 2015, conformément aux
          dispositions de la loi 12-06 du 12 janvier 2012 relative aux associations.
        </p>
      </Col>
      <Col s='12' className='mt-2'>
        <Button className='right' name='button' style={{backgroundColor: '#1e0c65',}}>
          <Link to='/a-propos-anf' style={{color: '#ffffff', display: 'block'}}>voir plus</Link>
        </Button>
      </Col>
    </Row>
  </Container>
  </div>
)

About.propTypes = {
  className: PropTypes.string,
}
export default About;
