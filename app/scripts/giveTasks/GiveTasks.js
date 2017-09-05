'use strict';

import React, {Component} from 'react';
import TodoItems from '../todoItems/ToDoItems.js';

class GiveTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 'Task',
            items: []
        };
    }

    addItem(event) {
        let itemArray = this.state.items;
        itemArray.push({
            text: this._inputElement.value,
            key: Date.now()
        });
        this.setState({items: itemArray});
        this._inputElement.value = '';
        event.preventDefault();
    }


    render() {
        return (
            <div className="tasks_block">
                <div className="add_task">
                    <form onSubmit={this.addItem.bind(this)}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="Enter New task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <div className="someTask">
                    <TodoItems entr={this.state.items}/>
                </div>
            </div>
        );
    }

}

export default GiveTasks;