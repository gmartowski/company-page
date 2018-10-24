import React, { Component, Fragment } from 'react';

export class Title extends Component {

    getTitleTag = markup => {

        const {title} = this.props;

        if (markup == 'h1') {
            return <h1>{title}</h1>;
        } else if (markup == 'h2') {
            return <h2>{title}</h2>;
        } else if (markup == 'h3') {
            return <h3>{title}</h3>;
        }
    };

    render() {
        const {markup} = this.props;
        let a = this.getTitleTag(markup);
        return (
            <>
                {a}
            </>
        );
    }
}
