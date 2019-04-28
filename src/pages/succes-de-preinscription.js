import React from 'react'

import { Link } from 'gatsby'
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
      <p>Thank you for contacting us. We will reply you very soon, have a nice day.</p>
      <Button id="btn">
        <Link to='/' title="DayenIO home page">
          take me to the home page
        </Link>
      </Button>
    </Container>
  </Layout>
)

export default SuccessPreRegisterPage;
