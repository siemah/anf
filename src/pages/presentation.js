import React from 'react'
// import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Organisation from '../components/presentation/organisation'
import Hero from '../components/presentation/Hero'
import AboutSection from '../components/presentation/AboutSection'

import '../assets/css/presentation.css';

const PresentationPage = (props) => {
  return (
    <Layout>
      <SEO
        url={`https://anf-dz.com/presentation/`}
        title="À Propos De L'Association National Des Financiers"
        description="L’Association Nationale des Financiers, ANF, est une Association Nationale à but non lucratif, dotée de la personnalité morale et de l’autonomie financière."
        keywords={["L’Association Nationale des Financiers", "préoccupations scientifiques", "Financiers Algériens", "Organiser des séminaires", "Echange d’expériences "]}
        />
      <Hero />
      <AboutSection />
      <Organisation />
    </Layout>
  )
}

export default PresentationPage;
