import react from 'react';
import styled from 'styled-components';

const Shared = styled.section`
  font-family: -apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  margin: 10%;
  color: #484848;
`
const TotalReviewsHeader = styled.div`
  font-size: 24px;
  font-weight: 800;
  line-height: 1.25em;
`
const TotalReviewsStars = styled.div`
  margin-left: 16px;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg' fill='black'%3E%3Cpath d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z'/%3E%3C/svg%3E");
`
const SearchButton = styled.div`
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
const ReviewAggregateContainer = styled.div`
  display: inline-block;
`
const ReviewEntry = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  margin-bottom: 10px;
  width: 50%;
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
};