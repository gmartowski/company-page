import React, { Component } from "react";
import "./portfolio.less";
import { PortfolioItem } from "./PortfolioItem/PortfolioItem";
import { portfolioItems } from "../../portfolio-items.json";
import { Button } from '../../Components/Button/Button';
import { Portal } from '../../Components/Portal/Portal';
import { Modal } from '../../Components/Modal/Modal';

export class Portfolio extends Component {

    private state = {
        isModalOpened: false
    };

    private toggleModalHandler = () => {
        this.setState({isModalOpened: !this.state.isModalOpened});
    };

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
                <Button type="positive" onClickHandler={this.toggleModalHandler}>Otwórz modal</Button>
                <Portal>
                    <Modal title="Tytuł modala" isModalOpened={this.state.isModalOpened}
                           onCloseHandler={this.toggleModalHandler}>
                        Strona niepublicznej szkoły wyższej Collegium Civitas
                        Projekt graficzny: Fabryka Aplikacji
                        CMS: Wordpress
                        Preprocesor CSS: Less
                        Pierwszy projekt obsługujący kilka wersji językowych
                        URL: http://www.civitas.edu.pl/
                    </Modal>
                </Portal>

            </div>
        );
    }
}
