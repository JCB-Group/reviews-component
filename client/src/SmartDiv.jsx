import React from 'react';

class SmartDiv extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      directive: "...",
    };
  }

  

  render() {
    let { directive } = this.props;
    console.log(typeof directive);
    if (typeof directive === 'number') {
      directive += 1;
    } else if (directive === "void") {
      directive = "...";
    } else if (directive === "next") {
      directive = ">";
    }
    return (
      <span>  {directive}</span>
    )
  }
};

export default SmartDiv;