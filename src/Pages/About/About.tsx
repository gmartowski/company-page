import React, { Component } from "react";
import { translate } from "react-i18next";
import { Image } from "../../Components/Image/Image";
import { AppContext, Provider } from "../../App/Provider";
import { Portal } from '../../Components/Portal/Portal';
import { Modal } from '../../Components/Modal/Modal';
import { Button } from '../../Components/Button/Button';

@translate("common")
export class About extends Component {

    private state = {
        isModalOpened: false
    };

    private toggleModalHandler = () => {
        this.setState({isModalOpened: !this.state.isModalOpened});
    };

    public render() {

        const {t} = this.props;

        return (
            <Provider>
                <AppContext.Consumer>
                    {
                        (context) => (
                            <div className="about">
                                <Image src={context.avatar}
                                       alt={context.ceo}
                                       title={context.ceo}
                                />
                                {t("about.content")}
                                <Button type="positive" onClickHandler={this.toggleModalHandler}>Otwórz modal</Button>
                                <Portal>
                                    <Modal title="Tytuł modala" isModalOpened={this.state.isModalOpened}
                                           onCloseHandler={this.toggleModalHandler}>
                                        Kontent modala
                                    </Modal>
                                </Portal>
                            </div>
                        )
                    }
                </AppContext.Consumer>
            </Provider>
        );
    }
}
