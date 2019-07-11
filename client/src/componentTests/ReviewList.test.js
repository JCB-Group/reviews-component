import React from 'react'
import { shallow, mount, render } from 'enzyme'
// import toJson from 'enzyme-to-json'
import Enzyme from 'enzyme';
import App from '../components/App.jsx';
import ReviewList from '../components/ReviewList.jsx';
import Search from '../components/Search.jsx';
import Aggregates from '../components/Aggregates.jsx';
import PageCarousel from '../components/PageCarousel.jsx';
import ReviewListEntry from '../components/ReviewListEntry.jsx';
import LeftArrow from '../components/LeftArrow.jsx';
import RightArrow from '../components/RightArrow.jsx';
import SmartDiv from '../components/SmartDiv.jsx';

Enzyme.configure({ disableLifecycleMethods: true });
    
describe('App', () => {
  it('should exist', () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });
});

describe('ReviewList', () => {
  it('should exist', () => {
    const component = shallow(<ReviewList />);
    expect(component.exists()).toBe(true);
  });
});

describe('Search', () => {
  it('should exist', () => {
    const component = shallow(<Search />);
    expect(component.exists()).toBe(true);
  });
});

describe('PageCarousel', () => {
  it('should exist', () => {
    const component = shallow(<PageCarousel />);
    expect(component.exists()).toBe(true);
  });
});

describe('Aggregates', () => {
  it('should exist', () => {
    const component = shallow(<Aggregates />);
    expect(component.exists()).toBe(true);
  });
});

describe('ReviewListEntry', () => {
  it('should exist', () => {
    const component = shallow(<ReviewListEntry />);
    expect(component.exists()).toBe(true);
  });
});
describe('LeftArrow', () => {
  it('should exist', () => {
    const component = shallow(<LeftArrow />);
    expect(component.exists()).toBe(true);
  });
});

describe('RightArrow', () => {
  it('should exist', () => {
    const component = shallow(<RightArrow />);
    expect(component.exists()).toBe(true);
  });
});

describe('SmartDiv', () => {
  it('should exist', () => {
    const component = shallow(<SmartDiv />);
    expect(component.exists()).toBe(true);
  });
});



//jest.fn for mock function