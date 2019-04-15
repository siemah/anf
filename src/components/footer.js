import React from 'react';

import { hasClass, addClass, removeClass } from '../utils/domTools';

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
     const mainMenu = document.querySelector('.js-main-menu');
     const mainMenuHeight = mainMenu.offsetHeight;
     const windowScroll = window.scrollY;

     if( windowScroll > mainMenuHeight && mainMenu && !hasClass(mainMenu, 'shadow')) {
       addClass(mainMenu, 'shadow')
     } else if (windowScroll <= mainMenuHeight &&mainMenu && hasClass(mainMenu, 'shadow')) {
       removeClass(mainMenu, ' shadow');
     }
   }

  componentWillUnMount(){
    this.addListener(window, "scroll", this.onScroll);
  }

  componentDidMount(){
    this.addListener(window, "scroll", this.onScroll);
  }

  render() {
    return(<></>)
  }

}
