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
      searchString: '',
      data: sampleData,
      page: 0,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.searchDataForString = this.searchDataForString.bind(this);
  }

  toggleSearch() {
    let { searching } = this.state;
    this.setState({
      searching: !searching,
    });
    if (searching) {
      let newData = this.searchDataForString();
      this.setState({
        data: newData,
      });
    }
  };

  searchDataForString() {
    let { data, searchString } = this.state;
    let matchingReviews = [];
    for (let i = 0; i < data.length; i++) {
      let { text } = data[i].textBody;
      let textStringsArray = text.split(' ');
      for (let word in textStringsArray) {
        if (word.toLowerCase() === searchString.toLowerCase()) {
          matchingReviews.push(data[i]);
        }
      }
    }
    return matchingReviews;
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