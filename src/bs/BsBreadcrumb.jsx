import React, {Fragment} from "react"
import {Breadcrumb} from 'react-bootstrap';

// import BsBreadcrumb from './BsBreadcrumb'
const BsBreadcrumb = (props) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BsBreadcrumb;