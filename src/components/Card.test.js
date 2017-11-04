import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Card from './Card';

it('renders without crashing', () => {
  const wrapper = shallow(<Card title="Balance">10</Card>);
  expect(wrapper).toMatchSnapshot();
});
