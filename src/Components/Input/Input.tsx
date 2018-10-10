import React, { Component, Fragment } from 'react';
import './input.less';
import classNames from 'classnames';

interface InputProps {
    name: string,
    labelText: string,
    value: string,
    onChangeHandler: void
}

interface InputState {
    value: string
}

export class Input extends Component<InputProps, InputState> {

    private state: InputState = {
        value: ''
    };

    private onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => this.props.onChangeHandler(event);

    public render() {
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
