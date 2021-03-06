import React from 'react';

import '../../assets/css/form.css'

export const FormField = ({name, type='text', label='', parentClassName='', errorMessage=null, onChange=null, ...rest}) => (
  <div className={`form-filed-block ${parentClassName}`} >
    <label htmlFor={name} className="form-field-block__label">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      onChange={onChange}
      className="form-fiel-block__input"
      {...rest}
      />
      {
        errorMessage && (<span className="form-field-block__error-message mb0">{errorMessage}</span>)
      }
  </div>
)

export const Button = ({ name='', type='button', className='', children, ...rest }) => (
  <button
    className={`button ${className}`}
    type={type}
    name={name}
    aria-expanded="false"
    aria-pressed="mixed"
    aria-label={`${name || children}`}
    {...rest}>{children}</button>
);
