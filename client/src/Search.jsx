import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }
  render() {
    return (
      <div>
        <div>hi i'm going to be a search bar</div>
      </div>
    )
  }
}

export default Search;