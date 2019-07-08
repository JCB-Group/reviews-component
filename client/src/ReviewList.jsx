import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

//does this component need state?

//refactor to map? for now hardcoded, always 7 at a time

const Reviewlist = (props) => {
  //map across whatever data is passed and make entries
  let { reviews } = props;
  return (
    <div>
      <div> < ReviewListEntry review={reviews[0]} /> </div>
      <div> < ReviewListEntry review={reviews[1]} /> </div>
      <div> < ReviewListEntry review={reviews[2]} /> </div>
      <div> < ReviewListEntry review={reviews[3]} /> </div>
      <div> < ReviewListEntry review={reviews[4]} /> </div>
      <div> < ReviewListEntry review={reviews[5]} /> </div>
      <div> < ReviewListEntry review={reviews[6]} /> </div>
    </div>
  )
};

export default Reviewlist;