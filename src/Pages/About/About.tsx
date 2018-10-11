import React, { Component } from "react";
import { translate } from "react-i18next";
import { Image } from '../../Components/Image/Image';

@translate("common")
export class About extends Component {

    public render() {

        const {t} = this.props;
        return (
            <div className="about">
                <Image src="http://stabsoft.pl/public/images/ja.jpg"
                       alt="Grzegorz Martowski"
                       title="Grzegorz Martowski"
                />
                {t("about.content")}
            </div>
        );
    }
}
