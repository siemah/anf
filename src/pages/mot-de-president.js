import React from 'react'
//import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Jumbotron from '../components/widgets/Jumbotron';
import { Container, Row, Col } from '../components/layout-components/grid';

import '../assets/css/president.css';
import PresidentImg from '../assets/images/office-work.jpg'
import AHeroBGrey from '../assets/images/a-hero-grey.png'

const PresidentPage = () => (
  <Layout>
    <SEO title="Mot De Président De l'ANF" />
    <div className={`hero hero-block`}>
	    <Jumbotron
	    	size="half"
	      nextElementId=''
	      className="president-hero"
        style={{overflow: 'hidden'}}
	      >
	      <Container className="hero__header">
	        <div>
	          <h1 className="hero__title opacity-0 js-slide-from-down" data-delay={0}>
	            <span className="hero-title__wrapper">Mot De Président De l'ANF</span>
	          </h1>
	        </div>
	      </Container>
	      <div className="hero__media opacity-0 js-slide-from-down" data-delay={.5}>
	        <span></span>
	      </div>
	    </Jumbotron>
	    <section className="content-block" style={{backgroundImage: `url(${AHeroBGrey})`}}>
	    	<Container>
	    		<Row>
	    			<Col s='12'>
	    				<article className="content-block__description opacity-0 js-slide-from-down" data-delay={.5}>
	    					<p className='first-p'>
                  <img src={PresidentImg} alt="président de l'ANF" className="content__image left"/>
	    							Chers Membres, chers Visiteurs,
									C’est avec un grand plaisir d’annoncer le lancement d’un nouveau
									site web pour l’Association Nationale des Financiers « ANF ». Ce site
									est considéré pour l’association comme premier espace internet en Algérie, pour
									vous accueillir. Il est consacré spécialement à l'Information et à l'Activité
									Financière. <br/>
                  &nbsp;&nbsp;Pour atteindre les objectifs escomptés par l’association, tous les efforts qui
									seront déployés doivent converger vers un seul but qui se résume à
									l’amélioration, à l’évolution et au développement. <br/>
                  &nbsp;&nbsp;Au vu de la pluralité des structures et la diversification des corps qui travaillent
                  dans le monde de la finance, et comme leur seul souci est de rejoindre un point
                  commun. Le monde de la finance est considéré comme étant un monde très
                  vaste avec un champ d’action étendu. Dans ce sens, notre association est
                  disposée à inviter tous les gens du secteur exerçant dans cet espace.
    						</p>
								<p>

								</p>
								<p>La qualité de membre de l'Association, vous agrée d’accéder à une base
									d’informations actualisées, se rapportant à la législation, à la jurisprudence, à la
									doctrine, relatives aux Finances ainsi que les points de vues de praticiens dans
									les différents domaines, (financiers, juridiques, comptables etc.).
									Bien évidemment, c’est par la contribution utile des différents intervenants sur la
									plate forme numérique que se fera l’enrichissement du site de l’association. Le
									site web demeure un outil d’échange sans égale avec la possibilité d’exposer
									les préoccupations et de pouvoir accéder aux téléchargements des différents
									supports numérisés.
								</p>
								<p>
									La qualité de notre site web et son amélioration est tributaire de votre opinion ;
									une attention particulière sera tenue à l’égard de toutes les propositions
									suggérées.
									</p>
	    				</article>
	    				<aside className='right opacity-0 js-slide-from-down' data-delay={.5}>
								<h2 className="article-block__author">HADJAMMAR Ferhat </h2>
								<h3 className="article-block__position">Président de l'ANF</h3>
							</aside>
	    			</Col>
	    		</Row>
	    	</Container>
	    </section>
	  </div>
  </Layout>
)

export default PresidentPage;
