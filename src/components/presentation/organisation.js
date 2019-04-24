import React from 'react';

import { Container, Row, Col } from '../layout-components/grid'
import Card from '../widgets/Card'

import DefaultImg from '../../assets/images/a-hero-grey.png';


const Organisation = props => (
  <Container className="organisation-block">
    <Row>
      <Col s='12' className=''>
        <Card
          imageSrc={DefaultImg}
          alt="Mr. HADJAMMAR Med Akli Presedent de l'ANF"
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
    </Row>
    <Row>
      <Col s='12' m='6' className=''>
        <Card
          imageSrc={DefaultImg}
          alt="Mr. HADJAMMAR Med Akli Presedent de l'ANF"
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
      <Col s='12' m='6' className=''>
        <Card
          imageSrc={DefaultImg}
          alt="Mr. HADJAMMAR Med Akli Presedent de l'ANF"
          title='Mr. HADJAMMAR Med Akli'
          text="Presedent de l'ANF"
          className='inline-block'
        />
      </Col>
    </Row>
    <Row>
      <Col s='12' m='6' className=''>
        <div className="inline-block card">
          <div className="card__image"></div>
          <div className="card__action-block">
            <h2 className="card__title">Mr. HADJAMMAR Med Akli</h2>
            <h4 className='card__text'>Presedent de l'ANF</h4>
          </div>
        </div>
      </Col>
      <Col s='12' m='6' className=''>
        <div className="inline-block card">
          <div className="card__image"></div>
          <div className="card__action-block">
            <h2 className="card__title">Mr. HADJAMMAR Med Akli</h2>
            <h4 className='card__text'>Presedent de l'ANF</h4>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col s='12' m='4' className=''>
        <div className="inline-block card">
          <div className="card__image"></div>
          <div className="card__action-block">
            <h2 className="card__title">Mr. HADJAMMAR Med Akli</h2>
            <h4 className='card__text'>Presedent de l'ANF</h4>
          </div>
        </div>
      </Col>
      <Col s='12' m='4' className=''>
        <div className="inline-block card">
          <div className="card__image"></div>
          <div className="card__action-block">
            <h2 className="card__title">Mr. HADJAMMAR Med Akli</h2>
            <h4 className='card__text'>Presedent de l'ANF</h4>
          </div>
        </div>
      </Col>
      <Col s='12' m='4' className=''>
        <div className="inline-block card">
          <div className="card__image"></div>
          <div className="card__action-block">
            <h2 className="card__title">Mr. HADJAMMAR Med Akli</h2>
            <h4 className='card__text'>Presedent de l'ANF</h4>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
)

export default Organisation;
