import React, { Component } from "react";
import "./career.less";
import { CareerItem } from "./CareerItem/CareerItem";
import { careerItems } from "../../career-items.json";
import { Title } from '../../Components/Title/Title';

export class Career extends Component {

    public render() {

        return (
            <div className="career">

                <Title markup="h1" title="career" />

                <div className="career__wrapper">
                    {
                        Object.keys(careerItems).map((item) => (
                            <CareerItem logoUrl={careerItems[item].logoUrl}
                                        logoAlt={careerItems[item].logoAlt}
                                        logoTitle={careerItems[item].logoTitle}
                                        profession={careerItems[item].profession}
                                        period={careerItems[item].period}
                                        responsibilities={careerItems[item].responsibilities}
                                        key={item}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}
