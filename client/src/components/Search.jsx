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
            <input placeholder={"Search Reviews"}type="text" value={value} onChange={this.onChangeHandler}/>
              {/* { this.props.value === '' ?
              <input placeholder={"Search Reviews"}type="text" value={value} onChange={this.onChangeHandler}/>
              : <input placeholder={"Search Reviews"}type="text" value={
                (this.props.value) === null ? '' : this.props.value
              } onChange={this.onChangeHandler}/>
              } */}
            </label>
          </form>
        </div>
      </SearchButton>  
    )
  }
}

export default Search;