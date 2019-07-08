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
        <form>
          <label>
            <input type="text" />
          </label>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Search;