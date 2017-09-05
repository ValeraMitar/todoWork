'use strict';

import React, {Component} from 'react';

class ToDoItems extends Component {
    constructor(props) {
        super(props);
    }

    onChange(event) {
        let itemArray = this.props.entr;
        itemArray.push({
            text: event.target.value,
            key: Date.now()
        });
        this.setState({items: itemArray});

    };

    createTasks(item) {
        return <li key={item.key}>
            <input className="task" value={item.text} onChange={this.onChange.bind(this)}/>
            <div className="delete" onClick={() => {

            }}>
                X
            </div>
        </li>
    }


    render() {
        let todoEntries = this.props.entr,
            listItems = todoEntries.map(this.createTasks.bind(this));

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}


export default ToDoItems;
