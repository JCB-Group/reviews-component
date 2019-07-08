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
            <input type="text" value={this.state.value} onChange="empty"/>
          </label>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Search;