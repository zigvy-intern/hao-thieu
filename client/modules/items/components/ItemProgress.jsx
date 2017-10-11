import React from 'react'
import { ProgressBar } from 'react-bootstrap';

const ItemPRogess = ({content}) => (
  <ProgessBar now={70} label="%(percent) S%"></ProgessBar>
);

export default ItemProgess;
