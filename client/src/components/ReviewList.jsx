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
            key={review._id}
          />
        )}
      </div>
    </div>
  )
};

export default Reviewlist;