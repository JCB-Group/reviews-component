import react from 'react';
import styled from 'styled-components';

const Shared = styled.section`
  font-family: -apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  margin: 10%;
  color: #484848;
`
const SearchButton = styled.div`
  margin-bottom: 14px;
`
const CarouselButton = styled.li`
  color: rgb(0,132,137);
  display: inline-block;
  list-style-type: disc;
`
const LineDiv = styled.div`
  border-bottom: 1px solid black;
  color: #484848;
  margin-top: 24px;
  margin-bottom: 24px;
`
const ReviewPhoto = styled.img`
  height: 48px;
  width: 48px;
  display: inline-block;
  border-radius: 50%;
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
  EntryBody
};