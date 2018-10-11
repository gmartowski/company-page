import React, { Component } from "react";
import Particles from "react-particles-js";
import "./particles.less";

const particlesProps = {
    canvasClassName: "particles__canvas",
    className: "particles",
    params: {
        color: "#fff",
        height: "75vh",
        particles: {
            number: {
                density: {
                    enable: true,
                    value_area: 1000
                },
                value: 80
            }
        },
        width: "100%"
    }
};

export class ParticlesWrapper extends Component {

    public render() {
        return (
            <div>
                <h1 style={{position: "absolute", top: "50%", left: "50%", color: "#fff"}}>Front-end </h1>
                <Particles {...particlesProps} />
            </div>
        );
    }
}
