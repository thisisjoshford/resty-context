import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form component', () => {

  const url = 'http://www.randomapi.com/';

  it('renders Form', () => {
    const wrapper = shallow(
      <Form 
        url={url} 
        textBody=""
        onChange={() => {}} 
        onSubmit={() => {}}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});
