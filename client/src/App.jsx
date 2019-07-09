import React from 'react';
import Search from './Search.jsx';
import ReviewList from './ReviewList.jsx';
import Aggregates from './Aggregates.jsx';
import sampleData from '../../sampleData.js';
import SearchInfo from './SearchInfo.jsx';

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
  
  componentDidUpdate() {
    let { searchString, searching } = this.state;
    if (searchString !== '' && searching === true) {
      this.searchDataForString();
    }
  };
  
  
  toggleSearch(e) {
    e.preventDefault();
    let newSearchString = e.target.getAttribute("value");
    let { searching } = this.state;
    this.setState({
      searching: !searching,
      searchString: newSearchString,
    });
  };

  searchDataForString() {
    let { data, searchString } = this.state;
    let matchingReviews = [];
    for (let i = 0; i < data.length; i++) {
      let textStringsArray = data[i].textBody.split(' ');
      for (let word of textStringsArray) {
        if (word.toLowerCase() === searchString.toLowerCase()) {
          matchingReviews.push(data[i]);
        }
      }
    }
    this.setState({
      data: matchingReviews,
      searchString: '',
    });
  }

  render() {
    const { data, page, searching } = this.state;
    return (
      <div>
        <div>{/* bar across top of page*/}</div>
        <div>< Search search={this.toggleSearch}/></div>
        <div>{/* bar under search + review avg */}</div>
        <div>{searching ? < SearchInfo /> : < Aggregates />}</div>
        <div>< ReviewList reviews={data}/></div>
        <div>pagination</div>
      </div>
    )
  }
}

export default App;