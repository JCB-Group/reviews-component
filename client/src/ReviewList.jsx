import React from 'react';

//does this component need state?

const Reviewlist = (props) => {
  //map across whatever data is passed and make entries
  let { reviews } = props;
  return (
    <div>
      <div>
        <div>{reviews[0].userName}</div>
        <span>  {reviews[0].textBody}</span>
      </div>
      <div>I'm hardcoded</div>
      <div>I'm hardcoded</div>
      <div>I'm hardcoded</div>
      <div>I'm hardcoded</div>
      <div>I'm hardcoded</div>
      <div>I'm hardcoded</div>
    </div>
  )
};

export default Reviewlist;