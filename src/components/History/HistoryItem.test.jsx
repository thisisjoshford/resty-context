import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';

describe('History Item component', () => {
  it('renders History Item', () => {
    const wrapper = shallow(
      <HistoryItem 
        url="http://www.randomapi.com"
        method="GET"
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
