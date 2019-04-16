import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import IndexHero from '../components/index/IndexHero'
import NetworkSection from '../components/index/NetworkSection'

import '../assets/css/index.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <IndexHero className='skew-section-after' />
    <NetworkSection />
  </Layout>
)

export default IndexPage
