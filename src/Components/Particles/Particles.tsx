import React, { Fragment, Component } from "react";
import Particles from "react-particles-js";
import { particlesProps } from './particlesProps';
import { Provider, AppContext } from '../../App/Provider';
import { Image } from '../Image/Image';
import "./particles.less";

export class ParticlesWrapper extends Component {
    render() {
        return (
            <Provider>
                <AppContext.Consumer>
                    {
                        ({logo}) => (
                            <Fragment>
                                <h1 style={{position: "absolute", top: "33%", color: "#fff", width: '100%'}}>
                                    <div style={{textAlign: 'center'}}>
                                        <Image src={logo} alt="Stabsoft" title="Stabsoft" />
                                    </div>
                                    <div style={{textAlign: 'center', fontSize: '50px'}}>Grzegorz Martowski</div>
                                    <div style={{textAlign: 'center', fontSize: '35px'}}>Front-end Developer</div>
                                    <div style={{textAlign: 'center', fontSize: '14px'}}>
                                        #stabsoft, #reactjsenthusiast, #frontenddeveloper
                                    </div>
                                </h1>
                                <Particles {...particlesProps} />
                            </Fragment>
                        )
                    }
                </AppContext.Consumer>
            </Provider>
        );
    }
}
