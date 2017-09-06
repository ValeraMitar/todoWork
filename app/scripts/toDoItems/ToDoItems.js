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

    crossTheText(event) {
        let li = event.target.closest('form'),
            target = li.childNodes[0];
        target.style.textDecoration = 'line-through';
        event.preventDefault();
    }

    createTasks(item) {
        return <li key={item.key}>
            <form onSubmit={this.crossTheText.bind(this)}>
                <input className="task" title={item.text} value={item.text} onChange={this.onChange.bind(this)}/>
                <div className="forPseudoElement">
                    <div className="delete">
                        x
                    </div>
                    <button className="done" type="submit">Done!</button>
                </div>
            </form>
        </li>
    }


    render() {
        let todoEntries = this.props.entr,
            listItems = todoEntries.map(this.createTasks.bind(this));

        return (
            <div className="someTask">
                <ul className="theList">
                    {listItems}
                </ul>
            </div>
        );
    }
}


export default ToDoItems;
