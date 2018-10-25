import React, { Component } from 'react';
import { translate } from "react-i18next";
import { Button } from '../Button/Button';
import classNames from 'classnames';
import { Title } from '../Title/Title';
import './modal.less';

interface IModalProps {
    title: string;
    children: string;
    isModalOpened: boolean;
    onCloseHandler: void;
    t: void;
}

@translate('common')
export class Modal extends Component<IModalProps> {

    private onCloseHandler = () => this.props.onCloseHandler();

    public render() {
        const {isModalOpened, title, children, t} = this.props;
        return (
            <div className={classNames({'modal': true, 'closed': !isModalOpened})}>
                <div className="modal__body">
                    <div className="modal__header">
                        <Title title={title} markup={'h1'} />
                    </div>
                    <div className="modal__content">{children}</div>
                    <div className="modal__footer">
                        <Button type="positive" onClickHandler={this.onCloseHandler}>{t("modal.close")}</Button>
                    </div>
                </div>
            </div>
        );
    }
}
