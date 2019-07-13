import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
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
        <ReviewStars>
          <StarRatings
            numberOfStars={5}
            rating={5}
            starRatedColor={'rgb(0,132,137)'}
            starDimension={'20px'}
            starSpacing={'0px'}
          />
        </ReviewStars>
      </ReviewEntryList>
      <ReviewEntryList> 
        <ReviewEntry>Check-In</ReviewEntry>
        <ReviewStars>
          <StarRatings
            numberOfStars={5}
            rating={5}
            starRatedColor={'rgb(0,132,137)'}
            starDimension={'20px'}
            starSpacing={'0px'}
          />
        </ReviewStars>
      </ReviewEntryList> 
      <ReviewEntryList>
        <ReviewEntry>Value</ReviewEntry>
        <ReviewStars>
          <StarRatings
            numberOfStars={5}
            rating={5}
            starRatedColor={'rgb(0,132,137)'}
            starDimension={'20px'}
            starSpacing={'0px'}
          />
        </ReviewStars>
      </ReviewEntryList>
    </div>
  </div>
)

export default AggregatesTwo;