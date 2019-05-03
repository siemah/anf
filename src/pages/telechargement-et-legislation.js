import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/widgets/Jumbotron'
import { Container, } from '../components/layout-components/grid';

import AHeroBG from '../assets/images/a-hero-grey.png';
import '../assets/css/telechargement-et-legislation.css';

const DownloadsAndLegislationPage = ({ data: { allWordpressPost } }) => (
  <Layout>
    <SEO title="Préinscription et adhérer" />
    <Jumbotron className='downloads-hero skew-section-after' theme='dark' nextElementId='donwloads-items'>
      <Container className="downloads-block">
        <h1 className="hero__title center">LEGISLATION & TEXTES REGLEMENTAIRES</h1>
      </Container>
    </Jumbotron>
    <div className='donwloads-block' style={{backgroundImage: `url(${AHeroBG})`}} id='donwloads-items'>
      <Container>
        <ul className="list-block center">
          {
            allWordpressPost.edges.length &&
            allWordpressPost.edges.map(({ node }) => (
              <li className="list-item">
                <a className="list-item__link" title={node.acf.file.title} href={node.acf.file.source_url}>{ node.title }</a>
              </li>
            ))
          }
        </ul>
      </Container>
    </div>
  </Layout>
)

export default DownloadsAndLegislationPage;

export const pageQuery = graphql`
  query {
    allWordpressPost (
     filter: { categories: { elemMatch: {slug: {eq: "pdf"}} } }
     ) {
     edges {
       node {
         title
         acf {
           file {
             source_url
             title
           }
         }
       }
     }
   }
  }
`
