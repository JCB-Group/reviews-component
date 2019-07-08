import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: false,
      data: [],
      page: 0,
    };
  }
  render() {
    return (
      <div>
        <div>{/* bar across top of page*/}</div>
        <div>search + review avg</div>
        <div>{/* bar under search + review avg */}</div>
        <div>reviewList</div>
        <div>pagination</div>
      </div>
    )
  }
}

export default App;