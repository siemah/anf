import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Container, Row, Col } from '../layout-components/grid';
import { Button } from '../layout-components/form';

const NetworkSection = ({className='', ...rest}) => (
  <div className="network-block" id='network'>
    <Container>

      <Row>
        <Col className="network-block_left" s='12' m='6'>
          <h2 className="network-block__title capitalize">à propos de l’ANF</h2>
          <p className="network-block__description">
            Un réseau Régional est mis en place composé de 4 conseils régionaux répartis comme suit :
          </p>
        </Col>
        <Col className="network-block_right"s='12' m='6'>
          <p className="network-block__description">
            Aussi, et au niveau des 48 wilayas du pays des comités de wilayas seront
            installées afin de pouvoir contribuer efficacement à l’amélioration des
            différentes activités de l’association.
          </p>
        </Col>
      </Row>

      <Row className="network-block__graph center js-slideUp-block">

        <Col s='12'>
          <span className={'circle opacity-0 js-slideUp'} data-delay={0} style={{backgroundColor: "#388E3C", top: 10}}>Centre</span>
        </Col>
        <Col s='12'>
          <span className={'circle opacity-0 js-slideUp'} data-delay={1} style={{backgroundColor: "#FF5722", left: 10}}>West</span>
          <span className={'circle opacity-0 js-slideUp big'} data-delay={4} style={{backgroundColor: "#D32F2F"}}>ANF Réseau Regional</span>
          <span className={'circle opacity-0 js-slideUp'} data-delay={2} style={{backgroundColor: "#512DA8", right: 10}}>Est</span>
        </Col>
        <Col s='12'>
          <span className={'circle opacity-0 js-slideUp'} data-delay={3} style={{backgroundColor: "#03A9F4", bottom: 10}}>Sud</span>
        </Col>

      </Row>

      <Row className='mt-2'>
        <p>N'hésitez pas de nous catactez pour dire un petit salutation et autre.</p>
        <Button name='contact' className='network-block__link button pulse capitalize'>
          <Link to='/contactez-nous'>contactez Nous</Link>
        </Button>
      </Row>

    </Container>
  </div>
);

NetworkSection.propTypes = {
  className: PropTypes.string,
}

export default NetworkSection;
