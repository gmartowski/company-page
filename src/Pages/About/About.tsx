import React, { Component } from 'react';
import StatelessFunction from "../../Components/Sandbox/StatelessFunction";
import { ChildrenTypes } from "../../Components/Sandbox/ChildrenTypes";
import ContainerComponent from "../../Components/Sandbox/ContainerComponent";
import ListsComponent from "../../Components/List/ListsComponent";

class About extends Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <StatelessFunction
                    classType={{className: 'stateless-function-container'}}
                    id={'test-id'}>
                    This is stateless function returning styled div
                </StatelessFunction>
                <ContainerComponent render={ListsComponent}/>
                <div>
                    Firmę StabSoft założyłem w Czerwcu 2014 roku - po zdobyciu doświadczenia w kilku firmach jako Web Developer, postanowiłem
                    poszerzyć moją
                    działalność o projekty tworzone pod własnym nazwiskiem.
                    Pracuję na terenie Wrocławia, mojego rodzinnego miasta i jego okolic, ale można ze mną współpracować również zdalnie.
                    Wykonuję zlecenia prywatne, współpracuję obecnie również z firmą z branży energii odnawialnej, dla której prowadzę usługi
                    webdeveloperskie oraz
                    wrocławską firmą programistyczną tworzącą oprogramowanie dla średnich i dużych przedsebiorstw.

                    Jestem absolwentem Politechniki Wrocławskiej, kierunków Teleinformatyka i Zarządzanie.
                    Programowanie to natomiast moja pasja, parę lat temu złapałem bakcyla i tak mi zostało.
                    Ciągle rozwijam się w zakresie Front-End i Back-End Developmentu, jestem na bieżąco z najnowszymi trendami.
                    Prywatnie interesuje się fotografią cyfrową, a także lubię pograć w siatkówkę.
                </div>
            </div>
        );
    }
}

export default About;
