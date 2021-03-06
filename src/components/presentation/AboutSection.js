import React from 'react'

import About from '../index/About'
import { Row, Col } from '../layout-components/grid'

const AboutSection = props => (
  <div id={"about"}>
    <About showLink={false}>
      <Row>
        <Col s="12" m="6">
          <h2 className="capitalize opacity-0 js-slide-from-down" data-delay={0.5}>Nos Missions</h2>
          <p className="description-block opacity-0 js-slide-from-down" data-delay={1}>
            Dans le cadre de ses missions, l’Association Nationale des Financiers (ANF) est chargée de :
          </p>
          <ul className="list-block ml0">
            <li className="list-item opacity-0 js-slide-from-down" data-delay={0.5}>S’intéresser et de prendre en charge les préoccupations scientifiques et Pédagogique des Financiers Algériens.</li>
            <li className="list-item opacity-0 js-slide-from-down" data-delay={0.6}>Organiser des séminaires et des rencontres avec les financiers à l’échelle Nationale et Internationale.</li>
          </ul>
        </Col>
        <Col s="12" m="6">
        <ul className="list-block ml0">
          <li className="list-item opacity-0 js-slide-from-down" data-delay={0.7}>Représentation de l’ensemble des membres de l’association envers les différentes institutions et organismes se rapportant aux objectifs de l’association.</li>
            <li className="list-item opacity-0 js-slide-from-down" data-delay={0.8}>Echange d’expériences et d’aides avec les associations ainsi que les institutions financières.</li>
            <li className="list-item opacity-0 js-slide-from-down" data-delay={0.9}>Création et développement du réseau de relations au niveau national et international dans le domaine financier.</li>
            <li className="list-item opacity-0 js-slide-from-down" data-delay={1}>Contribution pour l’amélioration des techniques dans le domaine financier.</li>
            <li className="list-item opacity-0 js-slide-from-down" data-delay={1.1}>Création des espaces d’études et des espaces scientifiques en vue de la vulgarisation des techniques financières à tous les niveaux.</li>
          </ul>
        </Col>
      </Row>
    </About>
  </div>
)

export default AboutSection;
