import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Clock from './Clock';

describe('Clock', () => {
  const currentTime = new Date('Sat Nov 04 2017 11:56:37 GMT-0300 (BRT)');
  const wrapper = shallow(<Clock time={currentTime}></Clock>);

  test('render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('render with the value 11:56:37 AM without class name', () => {
    const expected = <div>11:56:37 AM</div>;
    expect(wrapper).toContainReact(expected);
  });

  test('render with the class name', () => {
    const wrapper = shallow(<Clock time={currentTime} className="florentina"></Clock>);
    const expected = <div className="florentina">11:56:37 AM</div>;

    expect(wrapper).toContainReact(expected);
    expect(wrapper).toMatchSnapshot();
  });
});
