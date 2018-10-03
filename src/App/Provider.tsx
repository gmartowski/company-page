import React, { Component } from 'react';

export const AppContext = React.createContext();

export class Provider extends Component {
    state = {
        company: {
            name: 'StabSoft',
            ceo: 'Grzegorz Martowski',
            street: 'Kokosowa',
            flat: '1/16',
            postal: '54-060',
            city: 'Wrocław',
            phone: '693-881-676',
            email: 'kontakt@stabsoft.pl'
        }
    };

    render() {
        return (
            <AppContext.Provider value={this.state.company}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
