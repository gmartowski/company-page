import React, { Component } from 'react';
import axios from 'axios';

class ContainerComponent extends Component {

    state = {
        results: ''
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(({data: {results}}) => {
                this.setState({results});
            });
    }

    render() {
        const Render = this.props.render;
        return (
            <Render results={this.state.results}/>
        );
    }
}

export default ContainerComponent;
