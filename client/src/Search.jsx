import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  //what functions do i want this to call and when
  //we want to pass the state up to app
  //when app's searchString state changes/search toggles, it handles its own stuff
  onChangeHandler(event) {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    const { search } = this.props;
    const { value } = this.state;
    return (
      <div>
        <form onSubmit={search} value={value}>
          <label>
            <input type="text" value={value} onChange={this.onChangeHandler}/>
          </label>
          <input type="submit" value="Search Reviews"/>
        </form>
      </div>
    )
  }
}

export default Search;