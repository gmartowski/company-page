import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import './slider.less';

class HomeSlider extends Component {
    render() {
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
                                <h3>
                                    <span>{this.props.data[item].name.title}</span>
                                    <span>{this.props.data[item].name.first}</span>
                                    <span>{this.props.data[item].name.last}</span>
                                    <span>, CTO, Credit Suisse</span>
                                </h3>
                                <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
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

HomeSlider.propTypes = {};

export default HomeSlider;
