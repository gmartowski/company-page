import React from 'react';

interface ITitleProps {
    markup: string,
    title: string
}

function getTitleTag(markup: string, title: string) {
    if (markup == 'h1') {
        return <h1>{title}</h1>;
    } else if (markup == 'h2') {
        return <h2>{title}</h2>;
    } else if (markup == 'h3') {
        return <h3>{title}</h3>;
    } else {
        return <span>{title}</span>;
    }
}

export const Title: React.SFC<ITitleProps> = props => {
    const {markup, title} = props;
    return getTitleTag(markup, title);
};
