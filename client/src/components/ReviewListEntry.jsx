import React from 'react';
import { 
  LineDiv,
  ReviewPhoto,
  FlexContainer,
} from './styleComponents.jsx';
//once using actual data, conditionally map inside of render child comments
//clarify if child comments render all children at once or similarly have a cutoff

const ReviewListEntry = (props) => {
  let { review } = props;
  let { avatar, userName, textBody } = review;
  return (  
    <div>
      <div>
        <div>
          <FlexContainer>
            <div>
              <div>
                <a>
                  <div>
                    <div>
                      <ReviewPhoto src={avatar}/>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              {userName}
            </div>
          </FlexContainer>
          <div>{textBody}</div>
          < LineDiv />
        </div>
      </div>
    </div>
  )
};

export default ReviewListEntry;