import React from 'react';
import { Link } from 'gatsby';

import { Container } from '../layout-components/grid';
import MenuBlock from './MenuBlock';

const MainMenu = props => {
  const centerItems = [
    {
      url: '/',
      label: 'Accueil',
    },
    {
      url: '/presentation',
      label: 'Présentation',
    },
    {
      url: '/structure',
      label: 'Structure',
    },
  ];
  const rightItems = [
    {
      url: '/contact',
      label: 'Nos Contactes',
    },
    {
      url: '/preinscription',
      label: 'Préinscription',
      className: 'btn btn-primary'
    },
  ]
  return (
    <nav className="main-menu">
      <button className="main-menu__mobile-menu-trigger">
        <div className="fake-bar"></div>
        <div className="fake-bar half"></div>
        <div className="fake-bar "></div>
      </button>
      <Container>
        <Link to='/' className="main-manu__logo-brand">
          <img src={`https://css.gbtcdn.com/imagecache/gbm/img/site/logo_m@2x.png`} className='mb0' alt="brand logo"/>
        </Link>
        <MenuBlock className='main-menu__center left' itemsList={centerItems} />
      </Container>
      <MenuBlock className='main-menu__right right' itemsList={rightItems} />
    </nav>
  )
}

export default MainMenu;
