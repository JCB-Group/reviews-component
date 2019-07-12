import React from 'react';
import { SearchButton } from './styleComponents.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  
  onChangeHandler(event) {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { search } = this.props;
    const { value } = this.state;
    return (
      < SearchButton>  
        <div>
          <form onSubmit={search} value={value}>
            <label>
              <input type="text" value={value} onChange={this.onChangeHandler}/>
            </label>
            <input type="submit" value="Search Reviews"/>
          </form>
        </div>
      </SearchButton>  
    )
  }
}

export default Search;