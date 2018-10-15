import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import "./tile.less";

interface ITileProps {
    backgroundColor: string;
    fontColor: string;
    companyName: string;
    technologicalStack: string;
}

export class Tile extends Component<ITileProps> {

    public render() {

        const {backgroundColor, fontColor, companyName, technologicalStack} = this.props;
        const tileClasses = classNames({
            blue: backgroundColor === "blue",
            green: backgroundColor === "green",
            orange: backgroundColor === "orange",
        });

        return (
            <div className={`tile ${tileClasses}`}>

                <div className="tile__front">
                    <div className="tile__title">{companyName}</div>
                    <div className="tile__content">{technologicalStack}</div>
                </div>

                <div className="tile__back">
                    <FontAwesomeIcon icon={["fas", "search"]} />
                </div>
            </div>
        );
    }
}
