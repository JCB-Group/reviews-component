import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';


const Reviewlist = (props) => {
  let { reviews } = props;
  return (
    <div>
      <div>
        {reviews.map((review, index) =>
          < ReviewListEntry 
            review={review}
            key={index}
          />
        )}
      </div>
    </div>
  )
};

export default Reviewlist;