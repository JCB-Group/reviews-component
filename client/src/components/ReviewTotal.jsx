import React from 'react';
import StarRatings from 'react-star-ratings';

const ReviewTotal = ({ratings}) => (
  <div>
    <StarRatings
      numberOfStars={5}
      rating={ratings.total}
      starRatedColor={'rgb(0,132,137)'}
      starEmptyColor={'rgb(203, 211, 227)'}
      starDimension={'24px'}
      starSpacing={'0px'}
    />
  </div>
)

export default ReviewTotal;