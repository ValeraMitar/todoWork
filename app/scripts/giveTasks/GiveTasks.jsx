'use strict';

import React, {Component} from 'react';
import TodoItems from '../todoItems/ToDoItems.jsx';

class GiveTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: 'Task',
            items: [],
            count: 0
        };
    }

    addItem(event) {
        let itemArray = this.state.items,
            count = this.state.count,
            tasks_block = event.target.closest('div.tasks_block');
        itemArray.push({
            text: this._inputElement.value,
            key: `task ${count}`
        });
        count += 1;
        this.setState({
            items: itemArray,
            count:count
        });
        this._inputElement.value = '';
        event.preventDefault();
        tasks_block.childNodes[1].style.display = 'block';


    }
    delEnterPole(event) {
        let target = event.target;
        let task_container = target.closest('div.task_container'),
            Entr_new_task_container = target.closest('div.Entr_new_task_container'),
            _confirm = confirm('Are you sure you want to delete this item?');
        if(_confirm) {
            task_container.removeChild(Entr_new_task_container);
        }
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
                        <div className="del_btn" onClick={this.delEnterPole.bind(this)}>X</div>
                    </form>
                </div>
                {/*{this.state.items.length > 0 ? <TodoItems entr={this.state.items}/> : null}*/}
                <TodoItems entr={this.state.items}/>
            </div>
        );
    }

}

export default GiveTasks;