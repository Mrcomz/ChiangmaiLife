'use strict';

import 'react-native';
import React from 'react';
import review from '../../js/review';

import renderer from 'react-test-renderer';

describe('review', () => {


  it('renders correctly', () => {
  const tree = renderer.create(
    <review />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

});
