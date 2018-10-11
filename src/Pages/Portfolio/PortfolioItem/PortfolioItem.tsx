import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "../../../Components/Image/Image";
import React, { Component } from "react";
import "./portfolioItem.less";

interface IPortfolioItemProps {
    logoUrl: string;
    logoAlt: string;
    logoTitle: string;
    profession: string;
    period: string;
    responsibilities: Array<string>;
}

export class PortfolioItem extends Component<IPortfolioItemProps> {

    public render() {

        const {
            logoUrl,
            logoAlt,
            logoTitle,
            profession,
            period,
            responsibilities,
        } = this.props;

        return (
            <article className="portfolio-item">
                <div className="portfolio-item__logo">
                    <Image src={logoUrl} alt={logoAlt} title={logoTitle} />
                </div>
                <h2>{profession}</h2>
                <div className="portfolio-item__date">{period}</div>
                <div className="portfolio-item__description">
                    <ul className="portfolio-item__description-list">
                        {
                            (responsibilities).map((item, index) => (
                                <li key={index}><FontAwesomeIcon icon={["fas", "check"]} /> {item}</li>
                            ))
                        }
                    </ul>
                </div>
            </article>
        );
    }
}
