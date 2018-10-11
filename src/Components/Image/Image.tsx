import React, { Component } from 'react';

interface ImageProps {
    src: string,
    alt: string,
    title: string
}

export class Image extends Component<ImageProps, {}> {
    render() {
        const {src, alt, title} = this.props;
        return (
            <img src={src} alt={alt} title={title} className="image" />
        );
    }
}
