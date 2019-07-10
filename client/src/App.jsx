import React from 'react';
import Search from './Search.jsx';
import ReviewList from './ReviewList.jsx';
import Aggregates from './Aggregates.jsx';
import SearchInfo from './SearchInfo.jsx';
import PageCarousel from './PageCarousel.jsx';
import axios from 'axios';
import { paginateData, checkPageAmount } from './dataHelpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: false,
      searchString: '',
      data: [[]],
      pageNumber: 0,
      numberOfPages: 0,
      reviewsMatchingString: 0,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.searchDataForString = this.searchDataForString.bind(this);
  }
  
  componentDidMount() {
    axios.get('/reviews').then((response) => {
      this.setState({
        data: paginateData(response.data),
        numberOfPages: checkPageAmount(response.data),
      })
    })
    .catch((err) => {
      console.log(err);
    })
  };

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
    if (newSearchString !== '') {
      this.setState({
        searching: !searching,
        searchString: newSearchString,
      });
    }
  };

  searchDataForString() {
    let { data, searchString } = this.state;
    let matchingReviews = [];
    for (let page = 0; page < data.length; page++) {
      for (let entry = 0; entry < page.length; entry++) {
        let textStringsArray = data[page][entry].textBody.split(' ');
        for (let word of textStringsArray) {
          if (word.toLowerCase() === searchString.toLowerCase()) {
            matchingReviews.push(data[page][entry]);
          }
        }
      }
    }
    this.setState({
      data: paginateData(matchingReviews),
      searchString: '',
    });
  }

  render() {
    const { data, pageNumber, searching, numberOfPages } = this.state;
    return (
      <div>
        <div>{/* bar across top of page*/}</div>
        <div>< Search search={this.toggleSearch}/></div>
        <div>{/* bar under search + review avg */}</div>
        <div>{searching ? < SearchInfo /> : < Aggregates />}</div>
        <div>< ReviewList reviews={data[pageNumber]}/></div>
        <div> < PageCarousel page={pageNumber} numberOfPages={numberOfPages}/></div>
      </div>
    )
  }
}

export default App;