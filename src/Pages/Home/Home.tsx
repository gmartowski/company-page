import React, { Fragment } from "react";
import { ParticlesWrapper } from "../../Components/Particles/Particles";
import { Header } from '../../Components/Header/Header';

export const Home = () => {
    return (
        <Fragment>
            <Header theme="home" />
            <ParticlesWrapper />
        </Fragment>
    );
};
