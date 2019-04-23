import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/widgets/Jumbotron';
import { Container } from '../components/layout-components/grid';
import { Button } from '../components/layout-components/form';

import http404 from'../assets/images/http-404.svg'
import '../assets/css/404.css';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Pages n'existe pas :(" />
    <Jumbotron className="page-404 center">
      <Container >
        <img src={http404} alt="la page n'existe pas" />
        <p>Oops! Cette page n'existe plus.</p>
        <Button id="btn">
          <Link to='/' title="Retour ver la page d'accueil">
            Mene moi vers la page d'accueil
          </Link>
        </Button>
      </Container>
    </Jumbotron>
  </Layout>
)

export default NotFoundPage
