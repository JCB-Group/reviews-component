import React from 'react';
import { 
  LineDiv,
  ReviewPhoto,
  FlexContainer,
  EntryInfoContainer,
  EntryName,
  EntryDate,
} from './styleComponents.jsx';
//once using actual data, conditionally map inside of render child comments
//clarify if child comments render all children at once or similarly have a cutoff

const ReviewListEntry = (props) => {
  let { review } = props;
  let { avatar, userName, textBody, datePosted } = review;
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
            <EntryInfoContainer>
              <EntryName>
                {userName}
              </EntryName>
              <EntryDate>
                <span>
                  {datePosted}
                </span>
              </EntryDate>
            </EntryInfoContainer>
          </FlexContainer>
          <div>
            <div>
              <div>
                <div>
                  {textBody}
                </div>
              </div>
            </div>
          </div>
          < LineDiv />
        </div>
      </div>
    </div>
  )
};

export default ReviewListEntry;