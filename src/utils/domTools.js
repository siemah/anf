/**
 * @name getClassesOf
 * @author siemah
 * return class attribute of the current elemenet
 *  @param {HTMLElement} domElement the current element
 *  @return {String} the class attribute
 */
 export const getClassesOf = domElement => domElement.className || '';

/**
 * @name hasClass
 * check if the passed element has a class
 * @param {HTMLElement} domElement the current element
 * @param{String} className the name of class to check if is exist
 * @return {Boolean} true if exist otherwise false
 */
 export const hasClass = (domElement, className) => getClassesOf(domElement).includes(className)

/**
 * @name addClass
 * add class atribute to the passed element
 * @param {HTMLElement} domElement the current element
 * @param{String} className the class to add
 */
 export const addClass = (domElement, className) => domElement.className += ` ${className}`;

 /**
  * @name removeClass
  * add class atribute to the passed element
  * @param {HTMLElement} domElement the current element
  * @param{String} className the class to remove from domElement
  */
  export const removeClass = (domElement, className) => {
    domElement.className = getClassesOf(domElement).replace(className, '');
  }

/**
 * @name $
 * replace document.querySelectorAll by $
 * @param {String} selector css selector
 * @return {HTMLElement}
 */
 export const $ = selector => {
   return document.querySelector(selector)
 }
