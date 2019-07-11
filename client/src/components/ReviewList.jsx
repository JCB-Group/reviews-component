import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

//does this component need state?

//refactor to map? for now hardcoded, always 7 at a time

const Reviewlist = (props) => {
  //map across whatever data is passed and make entries
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