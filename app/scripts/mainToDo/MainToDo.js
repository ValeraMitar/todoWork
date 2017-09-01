'use strict';

import React, {Component} from 'react';
import text from './textTodo.json';

class MainToDo extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="toDo_container">
                <div className="toDo">
                    <h1>
                        {text.someText}
                    </h1>
                    <div className="add_taskList">
                        +
                    </div>
                </div>
            </div>
        );
    }
}


export default MainToDo;