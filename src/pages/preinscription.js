import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/widgets/Jumbotron'
import { FormField, Button } from '../components/layout-components/form';
import { Container, Row, Col } from '../components/layout-components/grid';

import BGImage from '../assets/images/preregister.svg';
import '../assets/css/preinscription.css';

const PreinscriptionPage = () => (
  <Layout>
    <SEO title="Préinscription et adhérer" />
    <Jumbotron className='preregister-hero' style={{backgroundImage: `url(${BGImage})`}}>
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
            <form action="#">
              <Row className="opacity-0 js-slide-from-down" data-delay={1}>
                <Col s='12'>
                  <h2 className='center'>Préinscription</h2>
                </Col>
              </Row>
              <Row className="opacity-0 js-slide-from-down" data-delay={1.5}>
                <Col s='12' m='6'>
                  <FormField name='nom' placeholder='Votre Nom' label='Nom*' />
                </Col>
                <Col s='12' m='6'>
                  <FormField name='prenom' placeholder='Votre Prénom' label='Prénom*' />
                </Col>
              </Row>
              <Row className="opacity-0 js-slide-from-down" data-delay={1.75}>
                <Col s='12' l='6'>
                  <FormField name='tel' placeholder='0 556 100 010' label='Numéro de tél*' />
                </Col>
                <Col s='12' l='6'>
                  <FormField name='email' placeholder='nom-adresse@domain.com' label='Adresse email*' />
                </Col>
              </Row>
              <Row className="opacity-0 js-slide-from-down" data-delay={2}>
                <Col s='12' m='6'>
                  <FormField name='date-de-naissance' type='date' placeholder='JJ/MM/AAAA' label='Date De Naissance*' />
                </Col>
                <Col s='12' m='6'>
                  <FormField name='lieu-de-naissance' placeholder='Cite 20 Aout 56' label='Lieu De Naissance*' />
                </Col>
              </Row>
              <Row className="opacity-0 js-slide-from-down" data-delay={2.5}>
                <Col s='12' m='6'>
                  <FormField name='profession' placeholder='Manager, Professeur ..' label='Votre Profession*' />
                </Col>
                <Col s='12' m='6'>
                  <FormField name='employeur' placeholder="Employeur (nom d'entreprise)" label='Employeur*' />
                </Col>
              </Row>
              <Row className="opacity-0 js-slide-from-down" data-delay={3}>
                <Col s='12'>
                  <FormField name='adresse-professionelle' placeholder='Ben Aknoun, alger' label='Adresse Professionelle*' />
                </Col>
              </Row>
              <Row className="opacity-0 js-slide-from-down" data-delay={3.5}>
                <Col s='12'>
                  <FormField name='diplome' placeholder="Doctorat En Economie étranger" label='Diplôme Et/Ou Titre*' />
                </Col>
              </Row>
              <Row className="opacity-0 js-slide-from-down" data-delay={3.5}>
                <Col s='12'>
                  <label htmlFor="terms">
                    <input id={'terms'} type='checkbox' className="form-field__checkbox" value='1' />
                    Accêpter les <Link to='/terms'>conditions et les terms</Link> d'inscription
                  </label>
                </Col>
                <Col s='12'>
                  <Button className="button__material form__button_submit capitalize" name='envoyer'>compléter la préinscription</Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  </Layout>
)

export default PreinscriptionPage;
