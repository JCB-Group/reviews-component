import React from 'react';
import styled from 'styled-components';

//aggregates should do the calculations based on overall review data
//makes get request for entire review selection
//iterates across results calculating averages for each review number
//renders all 6

//inefficient if needs to calculate upon every render, better to make another file
//containing all helper functions that calculates once per page load, not review re-renders
const Font = styled.section`
font-family: 'Montserrat', sans-serif;
`;


const Aggregates = () => (
  < Font>
    <div>
      <ul>
        <div>Accuracy</div>
        <div>Communication</div>
        <div>Cleanliness</div>
        <div>Location</div>
        <div>Check-In</div>
        <div>Value</div>
      </ul>
    </div>
    </Font> 
)

export default Aggregates;