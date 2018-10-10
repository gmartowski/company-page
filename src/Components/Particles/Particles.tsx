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
                    "value_area": 1000
                }
            }
        },
        height: '75vh',
        width: '100%',
        color: '#fff'
    }
};

export class ParticlesWrapper extends Component {

    render() {
        return (
            <div>
                <h1 style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    color: '#fff'
                }}>Front-end </h1>
                <Particles {...particlesProps} />
            </div>
        );
    }
}
