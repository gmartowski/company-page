import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "../../../Components/Image/Image";
import { Button } from '../../../Components/Button/Button';
import { Portal } from '../../../Components/Portal/Portal';
import { Modal } from '../../../Components/Modal/Modal';
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

    private state = {
        isModalOpened: false
    };

    private toggleModalHandler = () => {
        this.setState({isModalOpened: !this.state.isModalOpened});
    };

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
            <Fragment>
                <article className="portfolio-item">
                    <figure className="portfolio-item__logo">
                        <Image src={logoUrl} alt={logoAlt} title={logoTitle} />
                        <figcaption>{profession}</figcaption>
                    </figure>
                    <div className="portfolio-item__period">{period}</div>
                    <Button type="negative" onClickHandler={this.toggleModalHandler}>Szczegóły</Button>
                </article>
                <Portal>
                    <Modal title={logoAlt}
                           isModalOpened={this.state.isModalOpened}
                           onCloseHandler={this.toggleModalHandler}>
                        <div className="portfolio-item__description">
                            <ul className="portfolio-item__description-list">
                                {
                                    (responsibilities).map((item, index) => (
                                        <li key={index}><FontAwesomeIcon icon={["fas", "check"]} /> {item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </Modal>
                </Portal>
            </Fragment>
        );
    }
}
