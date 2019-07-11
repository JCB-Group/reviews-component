import React from 'react';

const LeftArrow = (props) => {
  let { value, changePage } = props;
  return (
    <span value={value - 1} onClick={changePage}>{"<"}</span>
  )
};

export default LeftArrow;