import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/widgets/Jumbotron'
import { Container, } from '../components/layout-components/grid';

import AHeroBG from '../assets/images/a-hero-grey.png';
import '../assets/css/telechargement-et-legislation.css';

const DownloadsAndLegislationPage = () => (
  <Layout>
    <SEO title="Préinscription et adhérer" />
    <Jumbotron className='downloads-hero skew-section-after' theme='dark' nextElementId='donwloads-items'>
      <Container className="downloads-block">
        <h1 className="hero__title center">LEGISLATION & TEXTES REGLEMENTAIRES</h1>
      </Container>
    </Jumbotron>
    <div className='donwloads-block' style={{backgroundImage: `url(${AHeroBG})`}} id='donwloads-items'>
      <Container>
        <ul className="list-block center">
          <li className="list-item">
            <a className="list-item__link" href="./files/dossier-d-adhesion.pdf">Ban sdjfsdf sdfsdfsdf</a>
          </li>
          <li className="list-item">
            <a className="list-item__link" href="#dd">Ban sdjfsdf sdfsdfsdf</a>
          </li>
          <li className="list-item">
            <a className="list-item__link" href="#dd">Ban sdjfsdf sdfsdfsdf</a>
          </li>
          <li className="list-item">
            <a className="list-item__link" href="#dd">Ban sdjfsdf sdfsdfsdf</a>
          </li>
        </ul>
      </Container>
    </div>
  </Layout>
)

export default DownloadsAndLegislationPage;
