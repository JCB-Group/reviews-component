import React from 'react';
import styled from 'styled-components';
import { 
  ReviewEntry,
  ReviewEntryList,
  ReviewStars,
} from './styleComponents.jsx';


const AggregatesOne = () => (
  <div>
    <div>
      <ReviewEntryList>
        <ReviewEntry>Accuracy</ReviewEntry>
        <ReviewStars>test</ReviewStars>
      </ReviewEntryList>
      <ReviewEntryList> 
        <ReviewEntry>Communication</ReviewEntry>
        <ReviewStars>test</ReviewStars>
      </ReviewEntryList> 
      <ReviewEntryList>
        <ReviewEntry>Cleanliness</ReviewEntry>
        <ReviewStars>test</ReviewStars>
      </ReviewEntryList>
    </div>
  </div>
)

export default AggregatesOne;