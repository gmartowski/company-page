import React, { Component } from 'react';

enum target {
    blank = "_blank",
    self = "_self",
    parent = "_parent",
    top = "_top",
};

interface IAnchorProps {
    href: string,
    target: target
    content: string
}

export class Anchor extends Component<IAnchorProps> {
    render() {
        const {href, target, content} = this.props;
        return (
            <a href={href} target={target} className="anchor">{content}</a>
        );
    }
}
