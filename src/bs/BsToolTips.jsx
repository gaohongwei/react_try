import React, {Fragment} from "react"
import {Button, ButtonToolbar, OverlayTrigger, Tooltip} from 'react-bootstrap';

// import BsToolTips from './BsToolTips'
const BsToolTips = (props) => {
  return (
    <ButtonToolbar>
      {['top', 'right', 'bottom', 'left'].map(placement => (
        <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Tooltip on <strong>{placement}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary">Tooltip on {placement}</Button>
        </OverlayTrigger>
      ))}
    </ButtonToolbar>
  );
}

export default BsToolTips;