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
      <SEO url={`https://anfdz.com/presentation/`} title="ANF Contacts" />
      <Hero />
      <AboutSection />
      <Organisation />
    </Layout>
  )
}

export default PresentationPage;
