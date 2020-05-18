import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from './HistoryList';

describe('History list component', () => {
  it('renders History list', () => {
    const historyArr = [{
      url: 'http://randomapi.com',
      method: 'GET'
    }];

    const wrapper = shallow(
      <HistoryList
        history={historyArr}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
