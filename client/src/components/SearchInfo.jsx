import React from 'react';

//need to pass down the total number of reviews with a matching string
//and the search string
//and function to be attached to button that clears the search string + sets the searching status to false
const SearchInfo = () => {
  return (
    <div>
      <div>
        <span>n guests have mentioned 'string'</span>
        <span>   BUTTON</span>
      </div>
      <div>this div is going to be a bar across the screen</div>
    </div>
  )
};

export default SearchInfo;