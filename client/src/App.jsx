import React from 'react';
import Search from './Search.jsx';
import ReviewList from './ReviewList.jsx';
import Aggregates from './Aggregates.jsx';
import SearchInfo from './SearchInfo.jsx';
import PageCarousel from './PageCarousel.jsx';
import axios from 'axios';
// import { paginateData, checkPageAmount } from './dataHelpers.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searching: false,
      searchString: '',
      data: [],
      pageNumber: 0,
      numberOfPages: 0,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.searchDataForString = this.searchDataForString.bind(this);
  }
  
  componentDidMount() {
    axios.get('/reviews').then((response) => {
      this.setState({
        data: response.data[1],
        numberOfPages: response.data[0],
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
    //if searchString is empty, dont switch to searching but do 
    //return data state to be the first pageof the paginated data
    //from the db
  };

  searchDataForString() {
    let { searchString } = this.state;
    axios({
      method: 'POST',
      url: '/search',
      data: {
        searchString: searchString
      }
    })
    .then((response) => {
      this.setState({
        data: response.data[1],
        numberOfPages: response.data[0],
        searchString: ''
      })
    })
    .catch((err) => {
      console.log(err);
    })
  };

  render() {
    const { data, pageNumber, searching, numberOfPages } = this.state;
    return (
      <div>
        <div>{/* bar across top of page*/}</div>
        <div>< Search search={this.toggleSearch}/></div>
        <div>{/* bar under search + review avg */}</div>
        <div>{searching ? < SearchInfo /> : < Aggregates />}</div>
        <div>< ReviewList reviews={data}/></div>
        <div> < PageCarousel page={pageNumber} numberOfPages={numberOfPages}/></div>
      </div>
    )
  }
}

export default App;