import React, { Component } from 'react';
import classNames from 'classnames';

export class Input extends Component {

    state = {
        value: ''
    };

    onChangeHandler = (event) => {
        this.props.onChangeHandler(event);
    };

    render() {
        return (
            <input type="text"
                   className={classNames({'input': true})}
                   value={this.props.value}
                   placeholder='dasdasdasdsad'
                   id={this.props.name}
                   name={this.props.name}
                   onChange={this.onChangeHandler}
            />
        );
    }
}
