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
          alt="Mr. HADJAMMAR Med Akli Presedent de l'ANF"
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block card_primary'
        />
      </Col>
    </Row>
    <Row className='centered-dot-middle'>
      <Col s='12' m='6' className='center opacity-0 js-slide-from-down' data-delay={0.4}>
        <Card
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
      <Col s='12' m='6' className='center opacity-0 js-slide-from-down' data-delay={0.5}>
        <Card
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
    </Row>
    <Row className='centered-dot-middle'>
      <Col s='12' m='6' className='center opacity-0 js-slide-from-down' data-delay={0.9}>
        <Card
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
      <Col s='12' m='6' className='center opacity-0 js-slide-from-down' data-delay={1}>
        <Card
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
    </Row>
    <Row>
      <Col s='12' m='4' className='center opacity-0 js-slide-from-down' data-delay={1.4}>
        <Card
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
      <Col s='12' m='4' className='center opacity-0 js-slide-from-down' data-delay={1.5}>
        <Card
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
      <Col s='12' m='4' className='center opacity-0 js-slide-from-down' data-delay={1.6}>
        <Card
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
    </Row>
  </Container>
)

export default Organisation;
