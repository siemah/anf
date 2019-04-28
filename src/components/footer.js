import React from 'react';
import { Link } from 'gatsby';

import BrandLogo from './widgets/BrandLogo';

import { $, addCss, hasClass, addClass, removeClass, isInViewport } from '../utils/domTools';

import '../assets/css/footer.css';
import AHeroBG from '../assets/images/a-hero-grey.png';

export default class Footer extends React.Component {

  /**
   * @name addListener
   * @author siemah
   * trigger an event listener to specified HTMLElement node
   * @param {HTMLElement} domElement the DOM element node who fired the event
   * @param {String} event the name of event to trigger
   * @param {Function} callback called when fire the event
   */
  addListener = (domElement=window, event, callback=()=>{}) => {
    if( typeof window !== `undefined` ) {
      domElement.addEventListener(event, callback);
    }
  }

  /**
   * @name cleanListener
   * @see Footer.addListener
   * @author siemah
   * clear the event listener triggered by HTMLElement node
   * @param {HTMLElement} domElement the DOM element node who fired the event
   * @param {String} event the name of event to trigger
   * @param {Function} callback called when fire the event
   */
  cleanListener = (domElement, event, callback=()=>{}) => {
    if( typeof window !== `undefined` ) {
      domElement.removeEventListener(event, callback);
    }
  }

  /**
   * @name onScroll
   * this is a callback function called when scroll event fired
   */
   onScroll = e => {
     const mainMenu = $('.js-main-menu');
     const mainMenuHeight = mainMenu !== undefined ? mainMenu.offsetHeight : 60;
     const windowScroll = window.scrollY;

     if( windowScroll > mainMenuHeight && mainMenu && !hasClass(mainMenu, 'shadow')) {
       addClass(mainMenu, 'shadow')
     } else if (windowScroll <= mainMenuHeight &&mainMenu && hasClass(mainMenu, 'shadow')) {
       removeClass(mainMenu, ' shadow');
     }

     const $jsSlideUpElem = $('.js-slideUp-block');
     if( $jsSlideUpElem && window.location.pathname === '/' && isInViewport($jsSlideUpElem) ){
       const $jsSlideUpElems = $('.js-slideUp', true);
       $jsSlideUpElems.forEach( elem => {
         // if( isInViewport(elem)) {
           const delay = elem.getAttribute('data-delay') * 500;
           setTimeout(() => {
             removeClass(elem, 'opacity-0');
             addClass(elem, 'slideUp');
             removeClass(elem, 'js-slideUp');
           }, delay);
         // }
       })
       removeClass($jsSlideUpElem, 'js-slideUp-block');
     }

     const $slideFromDown = $('.js-slide-from-down', true);
     if( $slideFromDown.length ) {
       $slideFromDown.forEach( (elem, i) => {
         let delay = 0;
         if( isInViewport(elem) && hasClass(elem, 'js-slide-from-down') && !hasClass(elem, 'slideFromDown') ) {
           delay = elem.getAttribute('data-delay') * 500
           removeClass(elem, 'js-slide-from-down');
           addClass(elem, 'slideFromDown');
           addCss(elem, 'animation-delay', `${delay}ms`)
           setTimeout(() => {
             removeClass(elem, 'opacity-0');
           }, delay)
         }
       });
     }
   }

  componentWillUnMount(){
    this.addListener(window, "scroll", this.onScroll);
  }

  componentDidMount(){
    if( typeof window !== `undefined` ) {
      window.scrollTo(0,window.pageYOffset+1);
      setTimeout(()=> {window.scrollTo(0,window.pageYOffset)}, 40);
    }
    this.addListener(window, "scroll", this.onScroll);
  }

  render() {
    return(
      <div className="footer footer-block center" style={{backgroundImage: `url(${AHeroBG})`}}>
        <div className="footer-block__brand-block">
          <BrandLogo className='footer-block__brand-logo' />
          <h2 className="footer-block__brand-name mb0">
            Association National des Financiers
          </h2>
        </div>
        <nav className="footer-block__creadcrumb-menu">
          <ul className='m0'>
            <li className='footer-block__creadcrumb-item'>
              <Link to='/' className='footer-block__creadcrumb-link'>Accueil</Link>
            </li>
            <li className='footer-block__creadcrumb-item'>
              <Link to='/' className='footer-block__creadcrumb-link'>Presentation</Link>
            </li>
            <li className='footer-block__creadcrumb-item'>
              <Link to='/' className='footer-block__creadcrumb-link'>Caontact</Link>
            </li>
            <li className='footer-block__creadcrumb-item'>
              <Link to='/' className='footer-block__creadcrumb-link'>Preinscription</Link>
            </li>
          </ul>
        </nav>
        <div className={"copyright container"}>
          <div className={"left"}>© 2019 A.N.F. Tous les droits sont réservés. </div>
          <div className={'right'}>
            Designed by &nbsp;
            <a href="https://dayenio.ml" >DayenIO</a></div>
        </div>
      </div>
    )
  }

}
