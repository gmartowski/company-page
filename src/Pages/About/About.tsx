import React, { Component } from 'react';
import ContainerComponent from "../../Components/Sandbox/ContainerComponent";
import { ListsComponent } from "../../Components/List/ListsComponent";
import { translate } from 'react-i18next';

@translate("common")
export class About extends Component {
    render() {
        const {t} = this.props;
        return (
            <div>
                <ContainerComponent render={ListsComponent} />
                <div>{t('about.content')}</div>
            </div>
        );
    }
}
