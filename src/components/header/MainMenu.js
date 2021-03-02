import React from 'react';

import MenuBlock from './MenuBlock';
import BrandLogo from '../widgets/BrandLogo'

import { $, hasClass, addClass, removeClass } from '../../utils/domTools';

const MainMenu = props => {
  const centerItems = [
    {
      url: '/presentation',
      label: 'Présentation',
    },
    {
      url: '/mot-de-president',
      label: 'Président',
    },
    {
      url: '/telechargement-et-legislation',
      label: 'Téléchargement',
    },
  ];
  const rightItems = [
    {
      url: '/nos-contacts',
      label: 'Nos Contacts',
    },
    {
      url: '/preinscription',
      label: 'Préinscription',
      className: 'btn btn-primary'
    },
  ];
  const buttonRef = React.createRef();
  /**
   * @name onClick
   * click event to display a mobile menu
   */
  const onClick = e => {
    e.preventDefault();
    if( typeof window !== `undefined` ) {
      const menus = document.querySelectorAll('.js-main-menu__container');
      /**
       * @name toggleMobileMenu
       * display or dosnt by toggling the show class
       * @param {Boolean} isDisplay to verify if will show mobile menu or nope
       */
      const toggleMobileMenu = (isDisplay=true) => menus.forEach( menu => {
        if(isDisplay) addClass(menu, 'show')
        else removeClass(menu, 'show')
      });

      if(hasClass(buttonRef.current, 'anime-rotate')) {
        removeClass(buttonRef.current, 'anime-rotate');
        toggleMobileMenu(false);
        removeClass($('html'), 'hidden');
        removeClass($('.js-main-menu'), 'full-screen');
      }
      else {
        addClass(buttonRef.current, 'anime-rotate');
        toggleMobileMenu(true);
        addClass($('html'), 'hidden');
        addClass($('.js-main-menu'), 'full-screen');
      }

    }
  }
  /**
   * @name onClickLink
   * fired when user click a link of menu to
   * remove hidden class of html element
   * @see onClick line 37
   */
  const onClickLink = e => {
    if( hasClass($('html'), 'hidden') ) removeClass($('html'), 'hidden');
  }
  return (
    <nav className="main-menu js-main-menu">
      <button
        ref={buttonRef}
        onClick={onClick}
        aria-label=''
        aria-hidden="true"
        className="main-menu__mobile-menu-trigger">
        <div className="fake-bar"></div>
        <div className="fake-bar half"></div>
        <div className="fake-bar "></div>
      </button>
      <div>
        <BrandLogo className='main-menu__logo-brand left pl-1' onClickLink={onClickLink} />
        <MenuBlock className='main-menu__center left js-main-menu__container' onClickLink={onClickLink} itemsList={centerItems} />
      </div>
      <MenuBlock className='main-menu__right right js-main-menu__container pr-05' onClickLink={onClickLink} itemsList={rightItems} />
    </nav>
  )
}

export default MainMenu;
