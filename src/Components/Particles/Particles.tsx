import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './particles.less';

const particlesProps = {
    className: 'particles',
    canvasClassName: 'particles__canvas',
    params: {
        particles: {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            }
        },
        height: '500px',
        width: '100%',
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
