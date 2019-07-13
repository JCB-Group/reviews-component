import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
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
        <ReviewEntry>Communication</ReviewEntry>
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
        <ReviewEntry>Cleanliness</ReviewEntry>
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

export default AggregatesOne;