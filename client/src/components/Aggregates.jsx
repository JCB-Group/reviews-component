import React from 'react';
import styled from 'styled-components';
import { ReviewEntry } from './styleComponents.jsx';
import AggregatesTwo from './AggregatesTwo.jsx';
import AggregatesOne from './AggregatesOne.jsx';
import { ReviewStars } from './styleComponents.jsx';

const Aggregates = () => (
  <React.Fragment>
    <ReviewStars>
      < AggregatesOne />
    </ReviewStars>
    <ReviewStars>
      < AggregatesTwo />
    </ReviewStars>
  </React.Fragment>
)

export default Aggregates;