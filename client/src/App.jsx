import React from 'react';
import Search from './Search.jsx';
import ReviewList from './ReviewList.jsx';
import Aggregates from './Aggregates.jsx';
import sampleData from '../../sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: false,
      data: sampleData,
      page: 0,
    };
  }
  render() {
    let { data, page } = this.state;
    return (
      <div>
        <div>{/* bar across top of page*/}</div>
        <div>< Search /></div>
        <div>{/* bar under search + review avg */}</div>
        <div>< Aggregates /></div>
        <div>< ReviewList reviews={data}/></div>
        <div>pagination</div>
      </div>
    )
  }
}

export default App;