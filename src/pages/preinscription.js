import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/widgets/Jumbotron'

const PreinscriptionPage = () => (
  <Layout>
    <SEO title="Préinscription et adhérer" />
    <Jumbotron >
      <h1>Preinscrire</h1>
    </Jumbotron>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PreinscriptionPage;
