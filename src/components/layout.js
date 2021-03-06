import React from 'react'
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import '../assets/css/layout.css';
import '../assets/css/shared.css';
import '../assets/css/media-query.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            lang
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <html lang={data.site.siteMetadata.lang} dir='ltr' />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
          { children }
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
