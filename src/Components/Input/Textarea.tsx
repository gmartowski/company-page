import React, { Component } from "react";
import "./input.less";

export class Textarea extends Component {

    private onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => this.props.onChangeHandler(event);

    public render() {
        return (
            <textarea onChange={this.onChangeHandler}
                      name="message"
                      className="textarea"
                      defaultValue={this.props.value}>
            </textarea>
        );
    }
}
