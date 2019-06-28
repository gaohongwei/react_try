import React, {Fragment} from "react"
import {Alert} from 'react-bootstrap';

// import BsAlert from './BsAlert'
const BsAlert = (props) => {
  const list = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ];
  return (
    list.map( (variant, idx) =>(
      <Alert key={idx} variant={variant}>
        This is a {variant} alert—check it out!
      </Alert>

      ))
  );
}

export default BsAlert;