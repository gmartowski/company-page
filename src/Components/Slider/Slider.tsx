import React, { Component } from 'react';
import Slider from 'react-slick';
import { Image } from '../Image/Image';
import './slider.less';

export class HomeSlider extends Component {

    public render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className="home-slider">

                <Slider {...settings}>
                    {
                        Object.keys(this.props.data).map((item) =>
                            <div>
                                <Image src={this.props.data[item].picture.thumbnail}
                                       alt="fsdfdsfsdfsd"
                                       title="dsdasdasd"
                                />
                                <h3>
                                    <span>{this.props.data[item].name.title} </span>
                                    <span>{this.props.data[item].name.first} </span>
                                    <span>{this.props.data[item].name.last} </span>
                                    <span>, CTO, Credit Suisse</span>
                                </h3>
                                <div>śćżźęąóLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor
                                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam
                                    et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                                    est
                                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                        )}
                </Slider>
            </div>
        );
    }
}
