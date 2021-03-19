import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/widgets/Jumbotron'
import { FormField, Button } from '../components/layout-components/form';
import { Container, Row, Col } from '../components/layout-components/grid';

import BGImage from '../assets/images/preregister.svg';
import '../assets/css/preinscription.css';

const PreinscriptionPage = ({ data: { allWpPost: posts } }) => {
  const termsDocument = posts.edges.find(({ node }) => node.slug.includes("terms"))
  const formsDocument = posts.edges.find(({ node }) => node.slug.includes("imprimer"))

  return (
    <Layout>
      <SEO
        url={`https://anfdz.com/preinscription/`}
        title="Préinscription et adhérer"
        description="Pourquoi adhérer:Assister à l’assemblée générale annuelle;Accéder à la revue de l’ANF;Bénéficier de tarifs préférentiels pour tous les évènements organisés par l’ANF;"
        keywords={["adhérer", "l’assemblée", "générale", "revue de l’ANF", "Bénéficier", "préférentiels", "évènements", "l’ANF"]}
      />
      <Jumbotron className='preregister-hero' style={{ backgroundImage: `url(${BGImage})` }}>
        <Container className="preregister-block">
          <Row>
            <Col s='12' m='6' l='7' className='preregister-block__motivation-wrapper'>
              <div className="preregister-block__motivation">
                <h1 className="header_1 opacity-0 js-slide-from-down" data-delay={0}>Pourquoi adhérer</h1>
                <ul className="list-block ml0">
                  <li className="list-item opacity-0 js-slide-from-down" data-delay={1}>Assister à l’assemblée générale annuelle </li>
                  <li className="list-item opacity-0 js-slide-from-down" data-delay={2}>Accéder à la revue de l’ANF</li>
                  <li className="list-item opacity-0 js-slide-from-down" data-delay={3}>Bénéficier de tarifs préférentiels pour tous les évènements organisés par l’ANF</li>
                  <li className="list-item opacity-0 js-slide-from-down" data-delay={4}>Disposer en accès libre à un fonds documentaire avec possibilités d’acquisition d’ouvrages en liaison avec la finance ou les métiers connexes.</li>
                  <li className="list-item opacity-0 js-slide-from-down" data-delay={5}>Recevoir les informations par mailing sur l’ensemble des activités de l’ANF</li>
                </ul>
              </div>
            </Col>
            <Col s='12' m='6' l='5' className="preregister-block__form-wrapper">
              <form action='/success-de-preinscription/' name="preinscription" method="POST" data-netlify-recaptcha="true" data-netlify="true" netlify>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="preinscription" />
                <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
                  <Col s='12'>
                    <h2 className='center'>Préinscription</h2>
                  </Col>
                </Row>
                <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
                  <Col s='12' m='6'>
                    <FormField name='nom' placeholder='Votre Nom' label='Nom*' />
                  </Col>
                  <Col s='12' m='6'>
                    <FormField name='prenom' placeholder='Votre Prénom' label='Prénom*' />
                  </Col>
                </Row>
                <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
                  <Col s='12' l='6'>
                    <FormField name='tel' placeholder='0 556 100 010' label='Numéro de tél*' />
                  </Col>
                  <Col s='12' l='6'>
                    <FormField name='email' placeholder='nom-adresse@domain.com' label='Adresse email*' />
                  </Col>
                </Row>
                <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
                  <Col s='12' m='6'>
                    <FormField name='date-de-naissance' type='date' placeholder='JJ/MM/AAAA' label='Date De Naissance*' />
                  </Col>
                  <Col s='12' m='6'>
                    <FormField name='lieu-de-naissance' placeholder='Cite 20 Aout 56' label='Lieu De Naissance*' />
                  </Col>
                </Row>
                <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
                  <Col s='12' m='6'>
                    <FormField name='profession' placeholder='Manager, Professeur ..' label='Votre Profession*' />
                  </Col>
                  <Col s='12' m='6'>
                    <FormField name='employeur' placeholder="Employeur (nom d'entreprise)" label='Employeur*' />
                  </Col>
                </Row>
                <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
                  <Col s='12'>
                    <FormField name='adresse-professionelle' placeholder='Ben Aknoun, alger' label='Adresse Professionelle*' />
                  </Col>
                </Row>
                <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
                  <Col s='12' m="6">
                    <FormField name='diplome' placeholder="Doctorat En Economie étranger" label='Diplôme/Titre*' />
                  </Col>
                  <Col s='12' m="6">
                    <FormField name='nationalite' placeholder="Algerienne" label='Nationalité*' />
                  </Col>
                </Row>
                <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
                  <Col s='12'>
                    <label htmlFor="terms">
                      <input id={'terms'} type='checkbox' className="form-field__checkbox mr-1" value='1' />
                      Accêpter les <a href={termsDocument.node.acf.document.localFile.publicURL || termsDocument.node.acf.document.mediaItemUrl || termsDocument.node.acf.document.source_url}>conditions et les terms</a> d'inscription
                    </label>
                    {
                      formsDocument && (
                        <>
                          <br />
                          <a href={formsDocument.node.acf.document.localFile.publicURL || formsDocument.node.acf.document.mediaItemUrl || formsDocument.node.acf.document.source_url}
                            style={{ textDecoration: 'underline', fontSize: 12 }}
                            target='_blank'
                            rel='noreferrer noopener' alt={posts.title}>
                            Télécharger le formulaire en pdf pour compléter l'inscription en arrivant au siège de l'association ANF.
                          </a>
                        </>
                      )
                    }
                  </Col>
                  <Col s='12'>
                    <div data-netlify-recaptcha="true"></div>
                    <Button className="button__material form__button_submit capitalize" type='submit' name='envoyer'>Valider votre Préinscription </Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allWpPost(
      filter: {
				categories: {
        nodes: {
          elemMatch: {
            slug: {
              in: ["terms", "imprimer"]
            }
          }
        }
      }
      }
    ) {
      edges {
				node {
					id
          title
          slug
          acf{
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
`;

export default PreinscriptionPage;
