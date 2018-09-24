import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './particles.less';

const particlesProps = {
    className: 'particles',
    width: '100%',
    height: '100%',
    canvasClassName: 'particles__canvas',
    params: {
        color: '#ffffff'
    }
};

export class ParticlesWrapper extends Component {

    render() {
        return (
            <Particles {...particlesProps} />
        );
    }
}
