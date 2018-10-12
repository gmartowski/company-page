import React, { Component } from 'react';
import './modal.less';
import { Button } from '../Button/Button';

export class Modal extends Component {

    public render() {
        return (
            <div className="modal">
                <div className="modal__body">
                    <div className="modal__header">
                        <h1>Modal title</h1>
                    </div>
                    <div className="modal__content">
                        dskldmasdkmasmdmkasdmmaskldmklaskldmkldlasdkllask
                    </div>
                    <div className="modal__footer">
                        <Button type="neutral">Anuluj</Button>
                        <Button type="positive">OK</Button>
                    </div>
                </div>
            </div>
        );
    }
}
