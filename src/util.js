import React, { Component } from 'react';
import {Tooltip, OverlayTrigger} from 'react-bootstrap';

const BootstrapTooltip = ({label, children, placement}) =>
  <OverlayTrigger placement={placement} overlay={<Tooltip id="tooltip">{label}</Tooltip>}>{children}</OverlayTrigger>

  export default BootstrapTooltip;