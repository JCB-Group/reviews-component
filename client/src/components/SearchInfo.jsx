import React from 'react';
import {
  LineDiv,
  FlexContainer,
} from './styleComponents.jsx';

//need to pass down the total number of reviews with a matching string
//and the search string
//and function to be attached to button that clears the search string + sets the searching status to false

const SearchInfo = (props) => {
  return (
      <div>
        <FlexContainer>
          <div>{props.num} guests have mentioned "{props.string}"</div>
          <span>   BUTTON</span>
        </FlexContainer>
        <LineDiv/>
      </div>
  )
};

export default SearchInfo;