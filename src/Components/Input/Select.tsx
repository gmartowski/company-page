import React, { Component } from "react";
import "./input.less";

interface ISelectProps {
    name: string;
    value: string;
    children: object;
}

export class Select extends Component<ISelectProps, {}> {

    private onChangeHandler = (event) => this.props.onChangeHandler(event);

    public render() {
        const {name, value, children} = this.props;
        return (
            <select className="select"
                    name={name}
                    id={name}
                    onChange={this.onChangeHandler}
                    value={value}
            >
                {
                    Object.keys(children).map((item) => (
                        <option key={children[item].id} value={children[item].name}>
                            {children[item].name}
                        </option>
                    ))
                }
            </select>
        );
    }
}
