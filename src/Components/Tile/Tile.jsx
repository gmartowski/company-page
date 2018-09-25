import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './tile.less';

export class Tile extends Component {
    render() {
        const { backgroundColor, fontColor, companyName, technologicalStack } = this.props;
        const tileClasses = classNames({
            'orange': this.props.backgroundColor === 'orange',
            'blue': this.props.backgroundColor === 'blue',
            'green': this.props.backgroundColor === 'green',
        });
        return (
            <div className={`tile ${tileClasses}`}>
                <div className="tile__title">{companyName}</div>
                <div className="tile__content">{technologicalStack}</div>
            </div>
        );
    }
}

Tile.propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    fontColor: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    technologicalStack: PropTypes.string.isRequired
};
