import React, {Fragment} from "react"
import {ProgressBar} from 'react-bootstrap';

// import BsProgressBar from './BsProgressBar'
const BsProgressBar = (props) => {
  return (
    <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  );
}

export default BsProgressBar;