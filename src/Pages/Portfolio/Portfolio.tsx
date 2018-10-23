import React, { Component } from "react";
import "./portfolio.less";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem";
import { portfolioItems } from "../../portfolio-items.json";
import { Title } from '../../Components/Title/Title';

export class Portfolio extends Component {

    public render() {

        return (
            <div className="portfolio">
                <div className="portfolio__title">
                    <Title markup="h1"
                           title="Portfolio"
                    />
                </div>
                <div className="portfolio__wrapper">
                    {
                        Object.keys(portfolioItems).map((item) => (
                            <PortfolioItem logoUrl={portfolioItems[item].logoUrl}
                                           logoAlt={portfolioItems[item].logoAlt}
                                           logoTitle={portfolioItems[item].logoTitle}
                                           profession={portfolioItems[item].profession}
                                           period={portfolioItems[item].period}
                                           responsibilities={portfolioItems[item].responsibilities}
                                           key={item}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}
