'use strict';

import React, {Component} from 'react';
import text from './textTodo.json';
import GiveTasks from '../giveTasks/GiveTasks.js';

class MainToDo extends Component {

    constructor() {
        super();
        this.state = {
            items:[],
            count:0
        };
    }

    taskList() {
        /*let taskContainer = document.createElement('div'),
            toDo = document.querySelector('.toDo_container');

        taskContainer.classList.add('taskContainer');
        toDo.appendChild(taskContainer);
        taskContainer.innerHTML = <GiveTasks/>;*/
        let tasks = this.state.items,
            count = this.state.count;

        if (tasks[0]) {
            tasks.push({
                key: count,
                task: <GiveTasks/>
            });
            console.log('yge est');
        } else {
            tasks.push({
                key: count,
                task: <GiveTasks/>
            });
        }
        count += 1;
        this.setState({
            items: tasks,
            count: count
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="toDo_container">
                <div className="toDo">
                    <h1>
                        {text.someText}
                    </h1>
                    <div className="add_taskList" onClick={() => {
                        this.taskList();
                    }}>
                        +
                    </div>
                </div>

            </div>
        );
    }
}


export default MainToDo;