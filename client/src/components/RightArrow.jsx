import React from 'react';

const RightArrow = (props) => {
  let { value, changePage } = props;
  return (
    <span value={Number(value) + 1} onClick={changePage}> {">"}</span>
  )
};

export default RightArrow;