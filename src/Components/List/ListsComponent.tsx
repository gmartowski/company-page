import React, { Component } from 'react';

class ListsComponent extends Component {
    render() {
        return (
            <ul>
                {
                    Object.keys(this.props.results).map((item) => (
                        <li key={item}>{this.props.results[item].cell}</li>
                    ))
                }
            </ul>
        );
    }
}

export default ListsComponent;
