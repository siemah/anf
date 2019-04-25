import React from 'react'
// import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Organisation from '../components/presentation/Organisation'
import Hero from '../components/presentation/Hero'
import AboutSection from '../components/presentation/AboutSection'

import '../assets/css/presentation.css';

const PresentationPage = (props) => {
  return (
    <Layout>
      <SEO title="ANF Contacts" />
      <Hero />
      <AboutSection />
      <Organisation />
    </Layout>
  )
}

export default PresentationPage;