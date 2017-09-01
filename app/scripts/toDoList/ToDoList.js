'use strict';
/*let config = require('./textTodo.json');

module.exports = function () {
    let greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};*/

/*
import React, {Component} from 'react'
import config from './textTodo.json';

class Greeter extends Component{
    render() {
        return (
            <div>
            {config.justDoText}
            </div>
    );
    }
}

export default Greeter*/

import React, {Component} from 'react';
import MainToDo from '../mainToDo/MainToDo.js';

class ToDoList extends Component{
    render() {
        return (
            <div className="main_container">
                <MainToDo/>
            </div>
        );
    }
}

export default ToDoList

