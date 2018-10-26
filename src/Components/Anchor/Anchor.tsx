import React from 'react';
import './anchor.less';

enum target {
    _blank,
    _self,
    _parent,
    _top
}

interface IAnchorProps {
    href: string,
    target: target
    children: any
}

export const Anchor: React.SFC<IAnchorProps> = props => {
    const {href, target, children} = props;
    return <a href={href} target={target} className="anchor">{children}</a>;
};
