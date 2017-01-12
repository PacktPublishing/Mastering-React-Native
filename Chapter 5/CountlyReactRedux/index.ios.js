import React from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider, connect } from 'react-redux';

import store from './src/store';
import Counter from './src/Counter';
import * as actions from './src/actions';

const mapStateToProps = state => ({
  count: state.count
});

const CounterContainer = connect(
  mapStateToProps,
  actions
)(Counter);

const Countly = () => (
  <Provider store={store}>
    <CounterContainer />
  </Provider>
);

AppRegistry.registerComponent('Countly', () => Countly);
