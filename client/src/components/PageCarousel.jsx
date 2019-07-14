import React from 'react';
import SmartDiv from './SmartDiv.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import { LeftSvg } from './SVG.jsx';
import starRatings from 'react-star-ratings/build/star-ratings';
import {
  ButtonNavBar,
  ButtonPadding,
  UnClickedButton,
  ClickedButton,
  VoidButton,
  ArrowButton,
} from './styleComponents.jsx';


class PageCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    let { page, numberOfPages, changePage } = this.props;
    let n = numberOfPages;
    return (
      <ButtonNavBar>
        { page > 0 ?
          <ButtonPadding>
            <ArrowButton>
              <LeftArrow value={page}changePage={changePage}/>
            </ArrowButton>
          </ButtonPadding> 
        : null}
          { page > 0 ? 
          <ButtonPadding>
            <UnClickedButton>
              <SmartDiv value={0} changePage={changePage}/>
            </UnClickedButton>
          </ButtonPadding>
          : null}
          { page >= 4 && n >= 9 ? 
          <ButtonPadding>
            <VoidButton>
              <SmartDiv value={'...'}/> 
            </VoidButton>
          </ButtonPadding>
          : null}
          { page == n - 1 ? 
          <ButtonPadding>
            <UnClickedButton>
              <SmartDiv value={Number(page) - 2} changePage={changePage}/>
            </UnClickedButton>
          </ButtonPadding>
          : null}
          { page == 3 ? 
          <ButtonPadding>
            <UnClickedButton>
              <SmartDiv value ={Number(page) - 2 } changePage={changePage}/>
            </UnClickedButton>
          </ButtonPadding>
          : null}
          { page >= 2 ?
        <ButtonPadding>
          <UnClickedButton>
             <SmartDiv value={Number(page) - 1} changePage={changePage}/>
          </UnClickedButton>
        </ButtonPadding>
          : null}
          { page >= 0 ? 
            <ButtonPadding>
              <UnClickedButton>
                <ClickedButton>
                  <SmartDiv value={page} changePage={changePage}/>
                </ClickedButton>
              </UnClickedButton>
            </ButtonPadding>
          : null}
          { page < n - 2 ? 
        <ButtonPadding>
          <UnClickedButton>
            <SmartDiv value={Number(page) + 1} changePage={changePage}/> 
          </UnClickedButton>
        </ButtonPadding>
          : null}
          { page == 0 ? 
        <ButtonPadding>
          <UnClickedButton>
            <SmartDiv value={Number(page) + 2} changePage={changePage}/>
          </UnClickedButton> 
        </ButtonPadding>
          : null}
            { page <= n - 5 && n >= 9 ? 
        <ButtonPadding>
          <VoidButton>
            <SmartDiv value={'...'}/> 
          </VoidButton>
        </ButtonPadding>
            : null}
          { page == n -4 ?
        <ButtonPadding>
          <UnClickedButton>
             <SmartDiv value={Number(page) + 2} changePage={changePage}/>
          </UnClickedButton>
        </ButtonPadding>
             : null}
          { page < n - 1 ?
        <ButtonPadding>
          <UnClickedButton>
             <SmartDiv value ={Number(n) - 1} changePage={changePage}/>
          </UnClickedButton> 
        </ButtonPadding>
             : null}
        { page < numberOfPages - 1 ?
        <ButtonPadding>
          <ArrowButton>
           <RightArrow value={page} changePage={changePage}/>
          </ArrowButton>
        </ButtonPadding>
        : null}
      </ButtonNavBar>
    )
  }
};

export default PageCarousel;