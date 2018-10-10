import React, { Component, Fragment } from 'react';
import './input.less';
import classNames from 'classnames';

interface InputProps {
    name: string,
    labelText: string,
    value: string,
    onChangeHandler: void
}

export class Input extends Component<InputProps> {

    private onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => this.props.onChangeHandler(event);

    public render() {
        const {name, labelText, value} = this.props;
        return (
            <Fragment>
                <label for={name} className="input-label">{labelText}</label>
                <input type="text"
                       className={classNames({'input': true})}
                       value={value}
                       id={name}
                       name={name}
                       onChange={this.onChangeHandler}
                />
            </Fragment>
        );
    }
}
