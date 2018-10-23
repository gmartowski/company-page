import React, { Component } from 'react';
import { Button } from '../Button/Button';
import classNames from 'classnames';
import './modal.less';

interface IModalProps {
    title: string;
    children: string;
    isModalOpened: boolean;
    onCloseHandler: void;
}

export class Modal extends Component<IModalProps> {

    private onCloseHandler = () => this.props.onCloseHandler();

    public render() {
        const {isModalOpened, title, children} = this.props;
        return (
            <div className={classNames({'modal': true, 'closed': !isModalOpened})}>
                <div className="modal__body">
                    <div className="modal__header"><h1>{title}</h1></div>
                    <div className="modal__content">{children}</div>
                    <div className="modal__footer">
                        <Button type="neutral" onClickHandler={this.onCloseHandler}>Anuluj</Button>
                        <Button type="positive" onClickHandler={this.onCloseHandler}>OK</Button>
                    </div>
                </div>
            </div>
        );
    }
}
