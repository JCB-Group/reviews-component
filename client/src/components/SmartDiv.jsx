import React from 'react';
import { Font, CarouselButton } from './styleComponents.jsx';

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
        <CarouselButton>...</CarouselButton>
      )
    }
    else {
      return (
        <CarouselButton 
          value={value}
          onClick={changePage}>
          {value}
        </CarouselButton>
      )
    }
  }
};

export default SmartDiv;