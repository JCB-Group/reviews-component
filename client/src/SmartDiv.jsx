import React from 'react';

class SmartDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "...",
    };
  }

  

  render() {
    let { value, changePage } = this.props;
    return (
      <span value={value} onClick={changePage}>  {value}</span>
    )
  }
};

export default SmartDiv;