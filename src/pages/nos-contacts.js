import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Map from '../components/widgets/Map'
import Jumbotron from '../components/widgets/Jumbotron'
import { Container, Row, Col } from '../components/layout-components/grid'

import BGImage from '../assets/images/a-hero-grey.png';
import '../assets/css/nos-contacts.css';

const OurContactsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="ANF Contacts" />
      <Jumbotron className='contacts-hero' style={{backgroundImage: `url(${BGImage})`}}>
        <Container>
          <Row className="mb0">
            <Col s='12'>
              <h1 className="hero__title opacity-0 js-slide-from-down" data-delay={0}>Nos Contacts</h1>
            </Col>
          </Row>
          <Row  className="mb0">
            <Col s='12' m='6' l='5'>
              <p className='opacity-0 js-slide-from-down' data-delay={1} style={{marginBottom: '.5rem'}}>N'hesitez pas de nous cantactez. Nous somme en votre service en tous les moments.</p>
            </Col>
            <Col s='12' m='6' l='5'>
              <ul className="list-block ml0 pl0">
                <li className="lite-item mb0 opacity-0 js-slide-from-down" data-delay={1}><span role="img" aria-label='phone'>📱</span> Sur Téléphone: <a href="tel:0213556100010">0 556 100 010</a></li>
                <li className="lite-item mb0 opacity-0 js-slide-from-down" data-delay={1.5}><span role="img" aria-label='email'>📧</span> Par Email: <a href="mailto:contact@anf.com">contact@anf.com</a></li>
                <li className="lite-item mb0 opacity-0 js-slide-from-down" data-delay={2}><span role="img" aria-label='location indicator'>📍</span> Adresse: <a target='_blank' rel="noopener noreferrer" href="https://www.google.com/maps/place/Centre+Culturel+Arezki+Taboudoucht/@36.7557197,3.0139383,15z/data=!4m5!3m4!1s0x0:0x5ab96a806a174819!8m2!3d36.7557197!4d3.0139383">Centre Culturel Arezki Taboudoucht – Ben Aknoun, Alger</a></li>
              </ul>
            </Col>
          </Row>
          <Row  className="mb0">
            <Col s='12'>
              <div className="map-block opacity-0 js-slide-from-down" data-delay={2.5}>
                <Map
                  mapboxApiAccessToken={data.site.siteMetadata.mapboxApiAccessToken}
                  label='ANF Siège' />
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Layout>
  )
}

export default OurContactsPage;

export const pageQuery = graphql`
  query MapboxApiAccessToken {
    site {
      siteMetadata {
        mapboxApiAccessToken
      }
    }
  }
`
