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
        <Col s="12" className="motivation-block">
          <h2 className="header-title__2">
            <span className="hero-title__wrapper">Pourquoi adhérer?</span>
          </h2>
          <div className="description-block">
            <ul className="list ml0">
              <li className={'list__item mb0'}><span className='hero-title__wrapper'>Assister à l’assemblée générale annuelle</span></li>
              <li className={'list__item mb0'}><span className='hero-title__wrapper'>Accéder à la revue de l’ANF</span></li>
            </ul>
            <Button className='description__button-wrapper p0' name='preinscription'>
              <Link to='/preinscription' title='Preinscrire ici' className='button__material description__link-button mt0' >Préinscription</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </BackgroundRow>
  </Layout>
)

export default IndexPage
