import React from 'react';
//once using actual data, conditionally map inside of render child comments
//clarify if child comments render all children at once or similarly have a cutoff

const ReviewListEntry = (props) => {
  let { review } = props;
  return (  
    <div>
      <div>{review.userName}</div>
      <p>{review.textBody}</p>
    </div>
  )
};

export default ReviewListEntry;