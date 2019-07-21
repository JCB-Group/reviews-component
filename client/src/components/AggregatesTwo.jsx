import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import { 
  ReviewEntry,
  ReviewEntryList,
  ReviewStars,
} from './styleComponents.jsx';

const AggregatesTwo = ({ratings}) => (
  <div>
    <div>
      <ReviewEntryList>
        <ReviewEntry>Location</ReviewEntry>
        <ReviewStars>
          <StarRatings
            numberOfStars={5}
            rating={ratings.location}
            starRatedColor={'rgb(0,132,137)'}
            starEmptyColor={'rgb(203, 211, 227)'}
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
            rating={ratings.checkIn}
            starRatedColor={'rgb(0,132,137)'}
            starEmptyColor={'rgb(203, 211, 227)'}
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
            rating={ratings.value}
            starRatedColor={'rgb(0,132,137)'}
            starEmptyColor={'rgb(203, 211, 227)'}
            starDimension={'20px'}
            starSpacing={'0px'}
          />
        </ReviewStars>
      </ReviewEntryList>
    </div>
  </div>
)

export default AggregatesTwo;