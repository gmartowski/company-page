import React, { Component, Fragment } from 'react';
import './input.less';
import classNames from 'classnames';

export class Input extends Component {

    state = {
        value: ''
    };

    onChangeHandler = (event) => {
        this.props.onChangeHandler(event);
    };

    render() {
        const {name, labelText, value, onChangeHandler} = this.props;
        return (
            <Fragment>
                <label for={name} className="input-label">{labelText}</label>
                <input type="text"
                       className={classNames({'input': true})}
                       value={value}
                       id={name}
                       name={name}
                       onChange={onChangeHandler}
                />
            </Fragment>
        );
    }
}
