'use strict';

import React, {Component} from 'react';
import text from './textTodo.json';
import GiveTasks from '../giveTasks/GiveTasks.jsx';
import CreateToDoList from '../toDoList/CreateToDoList.jsx';

class MainToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks:[],
            count:0
        };
    }

    taskList() {
        let tasks = this.state.tasks,
            count = this.state.count;

        if (tasks[0]) {
            tasks.push({
                key: Date.now(),
                task: <GiveTasks/>
            });
            console.log('yge est');
        } else {
            tasks.push({
                key: Date.now(),
                task: <GiveTasks/>
            });
        }
        count += 1;
        this.setState({
            tasks: tasks,
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
                <CreateToDoList someList={this.state.tasks}/>
            </div>
        );
    }
}


export default MainToDo;