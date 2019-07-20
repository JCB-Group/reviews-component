import React from 'react';
import { LeftSvg } from './SVG.jsx';
import { SVGWrapper } from './styleComponents.jsx';

const LeftArrow = (props) => {
  let { value, changePage } = props;
  return (
    <SVGWrapper value={Number(value) - 1} onClick={changePage}>
      <LeftSvg/>
    </SVGWrapper>
  )
};

export default LeftArrow;