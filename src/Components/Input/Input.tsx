import classNames from "classnames";
import React, { Component, Fragment } from "react";
import "./input.less";

interface InputProps {
    labelText: string;
    name: string;
    onChangeHandler: void;
    value: string;
}

export class Input extends Component<InputProps> {

    private onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => this.props.onChangeHandler(event);

    public render() {
        const {name, labelText, value} = this.props;
        return (
            <Fragment>
                <label htmlFor={name} className="input-label">{labelText}</label>
                <input type="text"
                       className={classNames({input: true})}
                       value={value}
                       id={name}
                       name={name}
                       onChange={this.onChangeHandler}
                />
            </Fragment>
        );
    }
}
