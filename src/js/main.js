import React from 'react';
import { render } from 'react-dom';
import LikeButton from 'js/like-button'

require('assets/styles/style.css');
require("assets/styles/like-button.css")

render(<LikeButton />, document.getElementById('app'));