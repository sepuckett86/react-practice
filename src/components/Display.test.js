import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders Display', () => {
    const wrapper = shallow(
      <Display
        controls={{ title: 'hi', subtitle: 'bye' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
