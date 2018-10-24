import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "../../../Components/Image/Image";
import { Button } from '../../../Components/Button/Button';
import { Portal } from '../../../Components/Portal/Portal';
import { Modal } from '../../../Components/Modal/Modal';
import "./career-item.less";

interface ICareerItemProps {
    logoUrl: string;
    logoAlt: string;
    logoTitle: string;
    profession: string;
    period: string;
    responsibilities: Array<string>;
}

export class CareerItem extends Component<ICareerItemProps> {

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

                <article className="career-item">
                    <figure className="career-item__logo">
                        <Image src={logoUrl} alt={logoAlt} title={logoTitle} />
                        <figcaption>{profession}</figcaption>
                    </figure>
                    <div className="career-item__period">{period}</div>
                    <Button type="negative" onClickHandler={this.toggleModalHandler}>Szczegóły</Button>
                </article>

                <Portal>
                    <Modal title={`${logoAlt} - ${profession}`}
                           isModalOpened={this.state.isModalOpened}
                           onCloseHandler={this.toggleModalHandler}>

                        <div className="career-item__description">

                            <div className="career-item__description-company-logo">
                                <Image src={logoUrl} alt={logoAlt} title={logoTitle} />
                            </div>

                            <ul className="career-item__description-list">
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
