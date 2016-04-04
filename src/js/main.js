import React from 'react';
import { render } from 'react-dom';
import MyFirstComponent from 'js/myFirstComponent'

require('assets/styles/style.css');

render(<MyFirstComponent />, document.getElementById('app'));