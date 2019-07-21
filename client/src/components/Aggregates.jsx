import React from 'react';
import styled from 'styled-components';
import AggregatesTwo from './AggregatesTwo.jsx';
import AggregatesOne from './AggregatesOne.jsx';
import { 
  ReviewEntry,
  ReviewStars,
  FlexContainer,
} from './styleComponents.jsx';

const Aggregates = ({ratings}) => (
  <FlexContainer>
    <React.Fragment>
      <ReviewStars>
        < AggregatesOne ratings={ratings}/>
      </ReviewStars>
      <ReviewStars>
        < AggregatesTwo ratings={ratings}/>
      </ReviewStars>
    </React.Fragment>
  </FlexContainer>
)

export default Aggregates;