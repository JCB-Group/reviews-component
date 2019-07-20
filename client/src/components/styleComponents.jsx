import react from 'react';
import styled from 'styled-components';

const Shared = styled.section`
  font-family: -apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  margin-left: 5%;
  margin-bottom: 5%;
  margin-right: 30%;
  color: #484848;
`
const TotalReviewsHeader = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25em;
  width: 10%;
`
const TotalReviewsStars = styled.div`
  width: 70%;
`
const SearchButton = styled.div`
`
const LineDiv = styled.div`
  border-bottom: 1px solid black;
  border-bottom-color: #EBEBEB;
  margin-top: 24px;
  margin-bottom: 24px;
`
const ReviewPhoto = styled.img`
  height: 48px;
  width: 48px;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
`
const ReviewAggregateContainer = styled.div`
  display: inline-block;
`
const ReviewEntry = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  margin-bottom: 10px;
  width: 80%;
`
const ReviewEntryList = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  margin-bottom: 10px;
  display: flex;
`
const ReviewStars = styled.div`
  width: 50%;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  margin-bottom: 10px;
`
const FlexContainer = styled.div`
  display: flex;
`
const EntryInfoContainer = styled.div`
  margin-left: 16px;
`
const EntryName = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.375em;
`
const EntryDate = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857142857142858em;
`
const EntryBody = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
`
const ButtonNavBar = styled.div`
  display: flex;
`
const ButtonPadding = styled.span`
  margin-left: 16px;
  margin-right: 16px;
  line-height: 32px;
`
const ButtonPaddingVoid = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  line-height: 32px;
`
const CarouselButton = styled.li`
  display: inline-block;
  list-style-type: disc;
  &:hover {
    text-decoration: underline;
  }
`
const CarouselButtonVoid = styled.li`
  display: inline-block;
  list-style-type: disc;
`
const UnClickedButton = styled.div`
  background-color: transparent;
  color: rgb(0, 132, 137);
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  width: 32px;
`
const ClickedButton = styled.div`
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background-color: rgb(0, 132, 137);
  color: rgb(255, 255, 255);
  border-radius: 16px;
`
const VoidButton = styled.div`
  background-color: transparent;
  color: #484848;
  line-height: 28px;
  text-align: center;
  width: 22px;
  height: 32px;
  font-size: 12px;
`
const ArrowButton = styled.div`
  width: 32px;
  height: 32px;
  line-height: 32px;
  background-color: transparent;
  box-shadow: rgb(0, 132, 137) 0px 0px 0px 1px;
  color: rgb(0, 132, 137);
  border-radius: 16px;
  border-color: rgb(0, 132, 137);
  border-width: 1px;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`
const SVGWrapper = styled.div`
  height: 0.75em;
  width: 0.75em;
  fill: currentcolor;
  display: inline-block;
`

export { 
  Shared,
  CarouselButton,
  LineDiv,
  SearchButton,
  ReviewPhoto,
  FlexContainer,
  EntryInfoContainer,
  EntryName,
  EntryDate,
  EntryBody,
  TotalReviewsHeader,
  TotalReviewsStars,
  ReviewAggregateContainer,
  ReviewEntry,
  ReviewStars,
  ReviewEntryList,
  ButtonNavBar,
  ButtonPadding,
  ButtonPaddingVoid,
  UnClickedButton,
  ClickedButton,
  VoidButton,
  ArrowButton,
  SVGWrapper,
  CarouselButtonVoid,
};