import React, { Component, Fragment } from 'react';

interface IPropsTitle {
    markup: string,
    title: string
}

export class Title extends Component<IPropsTitle> {

    private getTitleTag = (markup: string) => {

        const {title} = this.props;

        if (markup == 'h1') {
            return <h1>{title}</h1>;
        } else if (markup == 'h2') {
            return <h2>{title}</h2>;
        } else if (markup == 'h3') {
            return <h3>{title}</h3>;
        } else {
            return <span>{title}</span>;
        }
    };

    public render() {
        return (
            <Fragment>{this.getTitleTag(this.props.markup)}</Fragment>
        );
    }
}
