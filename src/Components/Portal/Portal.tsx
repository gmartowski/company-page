import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class Portal extends Component {

    constructor(props) {
        super(props);
        this.portalRoot = document.getElementById('portal');
    }

    public render() {
        return ReactDOM.createPortal(this.props.children, this.portalRoot);
    }
}
