import React, { Component } from 'react';
import axios from 'axios';

export class Users extends Component {

    state = {
        data: ''
    };

    async componentDidMount() {
        let data = await axios.get('https://randomuser.me/api/?format=json&results=10')
            .then(({data: {results}}) => {
                return results;
            });
        this.setState({data});
    }

    render() {
        const Render = this.props.render;
        const {data} = this.state;

        return (
            <Render data={data} />
        );
    }
}
