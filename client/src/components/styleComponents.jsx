import react from 'react';
import styled from 'styled-components';

const Shared = styled.section`
font-family: 'Montserrat', sans-serif;
margin: 10%;
color: #484848;
`;

const SearchButton = styled.div`
margin-bottom: 14px;
`

const CarouselButton = styled.li`
color: rgb(0,132,137);
display: inline-block;
list-style-type: disc;
`;

const LineDiv = styled.div`
border-bottom: 1px solid black;
color: #484848;
margin-bottom: 14px;
`

export { Shared, CarouselButton, LineDiv, SearchButton };