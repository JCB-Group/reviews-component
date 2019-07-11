import React from 'react';
import SmartDiv from './SmartDiv.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';

//this component needs to render between 6 and 9 divs in a carousel below reviews list, depending on review data
//at any given time, between 1 and 2 of those divs will be uninteractable "..." divs
//at any given time, between 1 and 2 of the divs will be next / last arrow buttons on the edges
//at 6 (i.e. the first or last page) only one arrow button will be rendered (move up if at first page, down at last)
//at 7, 8, or 9 divs rendered, both arrow buttons are rendered
//

class PageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  //render will call getNumberOfDivs and map across that area, passing in prop types and values as needed
  render() {
    let { page, numberOfPages, changePage } = this.props;
    if (numberOfPages >= 3 && page >= 2) {
      return (
        <div>
          { < LeftArrow value={page} changePage={changePage}/>}
          { < SmartDiv value={Number(page) - 1} changePage={changePage}/> }
          { < SmartDiv value={page} changePage={changePage}/> }
          { < SmartDiv value={Number(page) + 1} changePage={changePage}/> }
          { < RightArrow value={page} changePage={changePage}/> }
        </div>
      )
    } else {
      return (
        <div>
          { < SmartDiv value={page} changePage={changePage}/> }
          { < RightArrow value={page} changePage={changePage}/>}
        </div>
      )
    }
  }
};

export default PageCarousel;