import React, { Component, Fragment } from 'react';

export class Title extends Component {

    getTitleTag = markup => {

        const {title} = this.props;

        switch (markup) {
            case markup == 'h1':
                return <h1>{title}</h1>;
            case markup == 'h2':
                return <h2>{title}</h2>;
            case markup == 'h3':
                return <h3>{title}</h3>;
        }
    };

    render() {
        const {markup} = this.props;
        let a = this.getTitleTag(markup);
        debugger;
        return (
            <Fragment>{a}</Fragment>
        );
    }
}
