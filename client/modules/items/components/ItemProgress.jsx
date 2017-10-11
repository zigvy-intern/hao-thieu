import React from 'react';
import { ProgressBar } from 'react-bootstrap';
const now = 70;
const ItemProgress = ({content}) => (
<ProgressBar now={now} label={`${now}%`} />
);
export default ItemProgress;
