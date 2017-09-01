'use strict';

/*let greeter = require('./greeter.js');
document.getElementById('root').appendChild(greeter());*/

/*import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter';
import '../styles/style.less'

render(<Greeter />, document.getElementById('root'));*/


import React from 'react';
import {render} from 'react-dom';
import ToDoList from './toDoList/ToDoList.js';
import '../styles/style.less'

render(<ToDoList />, document.getElementById('root'));