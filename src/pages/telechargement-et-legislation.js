import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/widgets/Jumbotron'
import { Container, } from '../components/layout-components/grid';

import BGImage from '../assets/images/preregister.svg';
import '../assets/css/preinscription.css';

const DownloadsAndLegislationPage = () => (
  <Layout>
    <SEO title="Préinscription et adhérer" />
    <Jumbotron className='preregister-hero' style={{backgroundImage: `url(${BGImage})`}}>
      <Container className="preregister-block">

      </Container>
    </Jumbotron>
  </Layout>
)

export default DownloadsAndLegislationPage;
