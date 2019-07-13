import React from 'react';
import styled from 'styled-components';
import { 
  ReviewEntry,
  ReviewEntryList,
  ReviewStars,
} from './styleComponents.jsx';

const AggregatesTwo = () => (
  <div>
    <div>
      <ReviewEntryList>
        <ReviewEntry>Location</ReviewEntry>
        <ReviewStars>test</ReviewStars>
      </ReviewEntryList>
      <ReviewEntryList> 
        <ReviewEntry>Check-In</ReviewEntry>
        <ReviewStars>test</ReviewStars>
      </ReviewEntryList> 
      <ReviewEntryList>
        <ReviewEntry>Value</ReviewEntry>
        <ReviewStars>test</ReviewStars>
      </ReviewEntryList>
    </div>
  </div>
)

export default AggregatesTwo;