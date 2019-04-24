import React from 'react';
import { Link } from 'gatsby';

import { Row, Col } from '../components/layout-components/grid';
import { Button } from '../components/layout-components/form';

import Layout from '../components/layout'
import SEO from '../components/seo'
import IndexHero from '../components/index/IndexHero'
import NetworkSection from '../components/index/NetworkSection'
import About from '../components/index/About'
import BackgroundRow from '../components/widgets/BackgroundRow';

import '../assets/css/index.css';
import BGImage from '../assets/images/office-work.jpg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <IndexHero />
    <About id='about' />
    <NetworkSection className='skew-section-after' />
    <BackgroundRow src={BGImage} className='background-block_size_3 pt-10'>
      <Row>
        <Col s="12" className="motivation-block" style={{overflow: 'hidden'}}>
          <h2 data-delay={0} className="header-title__2 opacity-0 js-slide-from-down">
            <span className="hero-title__wrapper">Pourquoi adhérer?</span>
          </h2>
          <div className="description-block">
            <ul className="list ml0">
              <li data-delay={1} className={'list__item mb0 opacity-0 js-slide-from-down'}><span className='hero-title__wrapper'>Assister à l’assemblée générale annuelle</span></li>
              <li data-delay={2} className={'list__item mb0 opacity-0 js-slide-from-down'}><span className='hero-title__wrapper'>Accéder à la revue de l’ANF</span></li>
            </ul>
            <Button data-delay={3} className='description__button-wrapper p0 opacity-0 js-slide-from-down' name='preinscription'>
              <Link to='/preinscription' title='Preinscrire ici' className='button__material description__link-button mt0' >Préinscrire et Adhesion</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </BackgroundRow>
  </Layout>
)

export default IndexPage
