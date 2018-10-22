import React, { Component } from "react";
import { ParticlesWrapper } from "../../Components/Particles/Particles";
import { Tile } from "../../Components/Tile/Tile";
import Slider from "react-slick";
import "./home.less";


export class Home extends Component {

    public render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="home">

                <ParticlesWrapper />
                <div className="slider-wrapper">

                    <Slider {...settings}>
                        <div>
                            <h3>Jan Kowalski, CTO, Credit Suisse</h3>
                            <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div>
                            <h3>Robert Nowak, CTO, Funmedia</h3>
                            <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div>
                            <h3>Jan Maj CTO, Avra Sp. z o.o</h3>
                            <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div>
                            <h3>Krzysztof Lewandowski CTO, Green Line</h3>
                            <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div>
                            <h3>Anna Bil CTO, Surfland Sp. z o.o</h3>
                            <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                    </Slider>
                </div>

                <div className="home__tiles-wrapper">
                    <Tile backgroundColor="orange"
                          companyName="FunMedia"
                          fontColor="white"
                          technologicalStack="JS, LESS, jQuery"
                    />
                    <Tile backgroundColor="blue"
                          companyName="Credit Suisse"
                          fontColor="white"
                          technologicalStack="JS, LESS, jQuery"
                    />
                    <Tile backgroundColor="green"
                          companyName="Avra"
                          fontColor="white"
                          technologicalStack="JS, LESS, jQuery"
                    />
                    <Tile backgroundColor="orange"
                          companyName="The Green Line"
                          fontColor="white"
                          technologicalStack="JS, LESS, jQuery"
                    />
                </div>
            </div>
        );
    }
}
