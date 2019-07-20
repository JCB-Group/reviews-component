import React from 'react';
import { 
  Font,
  CarouselButton,
  CarouselButtonVoid
 } from './styleComponents.jsx';

class SmartDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "...",
    };
  }

  

  render() {
    let { value, changePage } = this.props;
    if (value === '...') {
      return (
        <CarouselButtonVoid>...</CarouselButtonVoid>
      )
    }
    else {
      return (
        <CarouselButton 
          value={value}
          onClick={changePage}>
          {Number(value) + 1}
        </CarouselButton>
      )
    }
  }
};

export default SmartDiv;