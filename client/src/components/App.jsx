import React from 'react';
import Search from './Search.jsx';
import ReviewList from './ReviewList.jsx';
import Aggregates from './Aggregates.jsx';
import SearchInfo from './SearchInfo.jsx';
import PageCarousel from './PageCarousel.jsx';
import styled from 'styled-components';
import { Shared, CarouselButton, LineDiv } from './styleComponents.jsx';
import axios from 'axios';

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
    this.changePage = this.changePage.bind(this);
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
  
  changePage(e) {
    console.log(e.target.getAttribute("value"));
    let pageNum = e.target.getAttribute("value");
    axios({
      method: 'POST',
      url: '/reviews',
      data: {
        pageNumber: pageNum
      }
    })
    .then((response) => {
      this.setState({
        data: response.data[1],
        numberOfPages: response.data[0],
        pageNumber: pageNum
      })
    })
    .catch((err) => {
      console.log(err);
    })
  };
  
  toggleSearch(e) {
    e.preventDefault();
    let newSearchString = e.target.getAttribute("value");
    let { searching, searchString } = this.state;
    if (newSearchString !== '') {
      this.setState({
        searching: !searching,
        searchString: newSearchString,
      });
    } else if (searching === true && searchString === '') {
      axios.get('/reviews').then((response) => {
        this.setState({
          data: response.data[1],
          numberOfPages: response.data[0],
          searching: false,
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }``
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
      console.log(response);
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
    const { changePage, toggleSearch } = this;
    return (
      <Shared> 
        <div>
          <div>< Search search={toggleSearch}/></div>
          <div>< LineDiv/></div>
          <div>{searching ? < SearchInfo /> : < Aggregates />}</div>
          <div>< ReviewList reviews={data}/></div>
          <div>
            { data.length > 0 ?
              < PageCarousel 
              page={pageNumber}
              numberOfPages={numberOfPages}
              changePage={changePage}
            />
            : null
            }
          </div> 
        </div>
      </Shared> 
    )
  }
}

export default App;