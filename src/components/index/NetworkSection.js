import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Container, Row, Col } from '../layout-components/grid';
import { Button } from '../layout-components/form';

const NetworkSection = ({ className = '', ...rest }) => (
  <div className={`network-block ${className}`} id='network'>
    <Container style={{ position: 'relative', zIndex: 10 }}>

      <Row>
        <Col className="network-block_left opacity-0 js-slide-from-down" data-delay={0} s='12' m='6'>
          <h2 className="network-block__title capitalize">Notre Missions</h2>
          <p className="network-block__description">
            Dans le cadre de ses missions, l’Association Nationale des Financiers (ANF) est   chargée de :
          </p>
        </Col>
        <Col className="network-block_right opacity-0 js-slide-from-down" data-delay={1} s='12' m='6'>
          <div className="network-block__description">
            <ul className="network-block__list m0">
              <li className="network-block__item mb0">S’intéresser et de prendre en charge les préoccupations scientifiques et Pédagogique des Financiers Algériens</li>
              <li className="network-block__item mb0">Organiser des séminaires et des rencontres avec les financiers à l’échelle Nationale et Internationale</li>
              <li className="network-block__item mb0">Représentation de l’ensemble des membres de l’association envers les différentes institutions et organismes se rapportant aux objectifs de l’association</li>
            </ul>
          </div>
        </Col>
        <Col s="12" className="mt-2 opacity-0 js-slide-from-down" data-delay={2}>
          <Button name='contact' className='network-block__link capitalize right'>
            <Link paintDrip hex="#0ab587" to='/preinscription'>Je veux m'inscrire</Link>
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="network-block_left opacity-0 js-slide-from-down" data-delay={3} s='12' m='6'>
          <h2 className="network-block__title capitalize">Réseau de l’ANF</h2>
          <p className="network-block__description">
            Un réseau Régional sera mis en place composé de 4 conseils régionaux répartis comme suit :
          </p>
        </Col>
        <Col className="network-block_right opacity-0 js-slide-from-down" data-delay={4} s='12' m='6'>
          <p className="network-block__description">
            Aussi, et au niveau des 48 wilayas du pays des comités de wilayas seront
            installées afin de pouvoir contribuer efficacement à l’amélioration des
            différentes activités de l’association.
          </p>
        </Col>
      </Row>

      <Row className="network-block__graph center js-slideUp-block">

        <Col s='12'>
          <span className={'circle opacity-0 js-slideUp'} data-delay={0} style={{ backgroundColor: "#388E3C", top: 10 }}>Centre</span>
        </Col>
        <Col s='12'>
          <span className={'circle opacity-0 js-slideUp'} data-delay={1} style={{ backgroundColor: "#FF5722", left: 10 }}>West</span>
          <span className={'circle opacity-0 js-slideUp big'} data-delay={4} style={{ backgroundColor: "#D32F2F" }}>ANF Réseau Regional</span>
          <span className={'circle opacity-0 js-slideUp'} data-delay={2} style={{ backgroundColor: "#512DA8", right: 10 }}>Est</span>
        </Col>
        <Col s='12'>
          <span className={'circle opacity-0 js-slideUp'} data-delay={3} style={{ backgroundColor: "#03A9F4", bottom: 10 }}>Sud</span>
        </Col>

      </Row>

      <Row className='mt-2'>
        <p className='opacity-0 js-slide-from-down' data-delay={.5}>N'hésitez pas de nous catactez pour dire un petit salutation et autre.</p>
        <Button name='contact' className='network-block__link pulse capitalize opacity-0 js-slide-from-down' data-delay={.7}>
          <Link paintDrip hex="#0ab587" to='/nos-contacts'>contactez Nous</Link>
        </Button>
      </Row>

    </Container>
  </div>
);

NetworkSection.propTypes = {
  className: PropTypes.string,
}

export default NetworkSection;
