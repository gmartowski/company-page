import React, { Component } from 'react';
import classNames from 'classnames';
import './button.less';

export class Button extends Component {

    state = {
        buttonValue: ''
    };

    onClickHandler = (event) => {
        this.props.onClickHandler(event);
    };

    render() {
        return (
            <button
                className={classNames({'btn': true})}
                onClick={this.onClickHandler}
                value={this.state.buttonValue}>
                {this.props.children}
            </button>
        );
    }
}
