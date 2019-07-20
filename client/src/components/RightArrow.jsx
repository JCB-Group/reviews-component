import React from 'react';
import { RightSvg } from './SVG.jsx';
import { SVGWrapper } from './styleComponents.jsx';

const RightArrow = (props) => {
  let { value, changePage } = props;
  return (
    <SVGWrapper value={Number(value) + 1} onClick={changePage}>
      <RightSvg/>
    </SVGWrapper>
  )
};

export default RightArrow;