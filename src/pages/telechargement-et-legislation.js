import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/widgets/Jumbotron'
import { Container, } from '../components/layout-components/grid';

import AHeroBG from '../assets/images/a-hero-grey.png';
import '../assets/css/telechargement-et-legislation.css';

const DownloadsAndLegislationPage = ({ data: { allWpPost } }) => (
  <Layout>
    <SEO
      url={`https://anf-dz.com/telechargement-et-legislation/`}
      title="Legislation et textes deglementaires"
      description="LEGISLATION et TEXTES REGLEMENTAIRES"
      keywords={["LEGISLATION", "TEXTES", "REGLEMENTAIRES", "ANF"]}
    />
    <Jumbotron className='downloads-hero skew-section-after' theme='dark' nextElementId='donwloads-items'>
      <Container className="downloads-block">
        <h1 className="hero__title downloads-hero__title center">LEGISLATION ET TEXTES REGLEMENTAIRES</h1>
      </Container>
    </Jumbotron>
    <div className='donwloads-block' style={{ backgroundImage: `url(${AHeroBG})` }} id='donwloads-items'>
      <Container>
        <ul className="list-block center">
          {
            allWpPost && allWpPost.edges.length
              ? allWpPost.edges.map(({ node }) => (
                node.acf.document
                  ? (
                    <li className="list-item" key={node.id}>
                      <a
                        className="list-item__link uppercase"
                        target='_blank'
                        rel="noopener noreferrer"
                        title={node.title}
                        href={node.acf.document.localFile.publicURL || node.acf.document.mediaItemUrl}>
                        {node.title}
                      </a>
                    </li>
                  )
                  : null
              ))
              : <h2>Y'a pas des fichiers à téléchargies pour le moment</h2>
          }
        </ul>
      </Container>
    </div>
  </Layout>
)

export default DownloadsAndLegislationPage;

export const pageQuery = graphql`
  query {
    allWpPost (
      filter: { categories: {
        nodes: {
        elemMatch: {slug: {eq: "pdf"}} }
        }
      }
    sort: {
			fields: [title]
      order: ASC
    }
  ) {
      edges {
        node {
          title
          id
          featuredImage {
						node {
							link
            }
          }
          acf {
            document {
              localFile {
                publicURL
              }
							sourceUrl
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`
