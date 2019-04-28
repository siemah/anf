import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { Container } from '../components/layout-components/grid'
import { Button } from '../components/layout-components/form'
import Layout from '../components/layout'
import SEO from '../components/seo'

import high5 from '../assets/images/high-five.svg';
import '../assets/css/404.css'

const SuccessPreRegisterPage = () => (
  <Layout>
    <SEO title="Succés de Préinscription" />
    <Container className="page-404 success-form center">
      <img src={high5} alt='five hands' />
      <p>Merci pour votre préinscription nous vous contacterons le plustôt possible.</p>
      <Button id="btn">
        <AniLink
          paintDrip hex="#1e0c65"
          to='/' title="DayenIO home page">
          Revenir à la page d'accueil
        </AniLink>
      </Button>
    </Container>
  </Layout>
)

export default SuccessPreRegisterPage;
