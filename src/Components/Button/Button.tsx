import React, { Component } from "react";
import classNames from "classnames";
import "./button.less";

interface IButtonProps {
    children: string;
    type: string;
    onClickHandler: void;
}

export class Button extends Component<IButtonProps> {

    private onClickHandler = (event) => this.props.onClickHandler(event);

    public render() {
        const {children, type} = this.props;
        return (
            <button
                className={
                    classNames({
                        "button": true,
                        "button--positive": type === "positive",
                        "button--negative": type === "negative",
                        "button--neutral": type === "neutral"
                    })}
                onClick={this.onClickHandler}>
                {children}
            </button>
        );
    }
}
