import React from 'react'
import { Link } from 'gatsby';

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
      <p>
        Merci !
        Votre Préinscription en ligne a été effectuée avec succès.
        Un Email  vous sera transmis après traitement.
      </p>
      <Button id="btn">
        <Link to='/' title="DayenIO home page">
          Revenir à la page d'accueil
        </Link>
      </Button>
    </Container>
  </Layout>
)

export default SuccessPreRegisterPage;
