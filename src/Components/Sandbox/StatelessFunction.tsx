import React, { Component } from 'react';
import axios from 'axios';


export class ContainerComponent extends Component {

    state = {
        persons: [],
        results: []
    };

    componentDidMount() {

        axios.get('https://randomuser.me/api/?results=10')
            .then(response => {
                console.log(response);
                this.setState({results: response.data.results});
            });
    }


    render() {
        return <div>
            {Object.keys(this.state.results).map(item => <div key={item}>{this.state.results[item].name.first}</div>)}
        </div>;
    }
}
