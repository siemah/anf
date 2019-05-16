import React from 'react';

import { Container, Row, Col } from '../layout-components/grid'
import Card from '../widgets/Card'

import DefaultImg from '../../assets/images/a-hero-grey.png';


const Organisation = props => (
  <Container className="organisation-block">
    <Row className='centered-dot'>
      <Col s='12' className='center opacity-0 js-slide-from-down' data-delay={0}>
        <Card
          imageSrc={DefaultImg}
          alt="M. HADJAMMAR Ferhat Presedent de l'ANF"
          title='M. HADJAMMAR Ferhat'
          text="Président de l'ANF"
          className='inline-block card_primary'
        />
      </Col>
    </Row>
    <Row className='centered-dot-middle'>
      <Col s='12' m='6' className='center opacity-0 js-slide-from-down' data-delay={0.4}>
        <Card
          title='M. CHEMAM Y Arafat'
          text="1er Vice Président"
          className='inline-block organisation-card__theme_full'
        />
      </Col>
      <Col s='12' m='6' className='center opacity-0 js-slide-from-down' data-delay={0.5}>
        <Card
          title='M. BOUGUESBA Hatem'
          text="2ème Vice Président"
          className='inline-block organisation-card__theme_full'
        />
      </Col>
    </Row>
    <Row className='centered-dot-middle'>
      <Col s='12' m='6' className='center opacity-0 js-slide-from-down' data-delay={0.9}>
        <Card
          title='M. BAKHA Tahar'
          text="Sécrétaire General"
          className='inline-block organisation-card__theme_full'
        />
      </Col>
      <Col s='12' m='6' className='center opacity-0 js-slide-from-down' data-delay={1}>
        <Card
          title='M. KHELACI Abed Elhakim'
          text="Trésorier"
          className='inline-block organisation-card__theme_full'
        />
      </Col>
    </Row>
    <Row style={{position:'relative'}}>
      <hr class="bar_theme_half mb0" />
      <Col s='12' m='4' className='center opacity-0 js-slide-from-down' data-delay={1.4}>
        <Card
          title='M. NEDJAR Djamel'
          text="Membre"
          className='inline-block organisation-card__theme_full'
        />
      </Col>
      <Col s='12' m='4' className='center opacity-0 js-slide-from-down' data-delay={1.5}>
        <Card
          title='Mr. MOUMENI Redouan'
          text="Membre"
          className='inline-block organisation-card__theme_full'
        />
      </Col>
      <Col s='12' m='4' className='center opacity-0 js-slide-from-down' data-delay={1.6}>
        <Card
          title='Mr. LAROUM Hamid'
          text="Membre"
          className='inline-block organisation-card__theme_full'
        />
      </Col>
    </Row>
  </Container>
)

export default Organisation;
