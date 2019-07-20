import React from 'react';
import styled from 'styled-components';
import AggregatesTwo from './AggregatesTwo.jsx';
import AggregatesOne from './AggregatesOne.jsx';
import { 
  ReviewEntry,
  ReviewStars,
  FlexContainer,
} from './styleComponents.jsx';

const Aggregates = () => (
  <FlexContainer>
    <React.Fragment>
      <ReviewStars>
        < AggregatesOne />
      </ReviewStars>
      <ReviewStars>
        < AggregatesTwo />
      </ReviewStars>
    </React.Fragment>
  </FlexContainer>
)

export default Aggregates;