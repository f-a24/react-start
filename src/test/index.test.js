/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  it('Welcome to React', () => {
    expect(
      shallow(<App />)
        .children()
        .text()
    ).toBe('Welcome to React');
  });
});
