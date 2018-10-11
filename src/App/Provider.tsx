import React, { Component } from "react";

export const AppContext = React.createContext();

interface IProviderState {
    company: object;
}

export class Provider extends Component<IProviderState> {

    private state = {
        company: {
            ceo: "Grzegorz Martowski",
            city: "Wrocław",
            email: "kontakt@stabsoft.pl",
            flat: "1/16",
            name: "StabSoft",
            phone: "693-881-676",
            postal: "54-060",
            skype: "grzegorz.martowski",
            street: "Kokosowa",
            avatar: "http://stabsoft.pl/public/images/ja.jpg",
        }
    };

    public render() {
        return (
            <AppContext.Provider value={this.state.company}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
