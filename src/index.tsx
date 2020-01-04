import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';
import Time from './Time';
import Fruits from './Fruits';

const fruits: Array<string> = ['apple', 'banana', 'pineapple', 'pear'];
ReactDOM.render(
  <React.Fragment>
    <Header text="Hello World!!!" />
    <Time />
    <Fruits fruits={fruits} />
  </React.Fragment>,
  document.querySelector('#root')
);
