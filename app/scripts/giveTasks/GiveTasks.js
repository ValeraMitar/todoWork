'use strict';

import React, {Component} from 'react';

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
            text: event.target.value,
            key: Date.now()
        });
        this.setState({items: itemArray});
        this._inputElement.value = '';
        event.preventDefault();
    }

    onChange(event) {
        let itemArray = this.state.items;
        itemArray.push({
            text: event.target.value,
            key: Date.now()
        });
        this.setState({items: itemArray});

    };

    render() {
        return (
            <div className="tasks_block">
                <div className="add_task">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a}
                               placeholder="Enter New task">
                        </input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <div className="someTask">
                    <div className="task_place">
                        <input className="task" value={this.state.term} onChange={this.onChange}/>
                    </div>
                    <div className="delete" onClick={() => {

                    }}>
                        X
                    </div>
                </div>
            </div>
        );
    }

}

export default GiveTasks;