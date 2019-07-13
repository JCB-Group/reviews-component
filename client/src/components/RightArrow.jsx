import React from 'react';

const RightArrow = (props) => {
  let { value, changePage } = props;
  return (
    <div value={Number(value) + 1} onClick={changePage}> {">"}</div>
  )
};

export default RightArrow;