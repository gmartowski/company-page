import React, { Component } from "react";
import "./portfolio.less";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem";
import { portfolioItems } from "../../portfolio-items.json";

export class Portfolio extends Component {

    public render() {

        return (
            <div className="portfolio">
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
        );
    }
}
