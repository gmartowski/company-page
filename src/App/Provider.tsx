import React, { Component } from "react";

export const AppContext = React.createContext();

interface IProviderState {
    company: object;
}

export class Provider extends Component<IProviderState> {

    private state = {
        company: {
            name: {
                first: "Grzegorz",
                last: "Martowski"
            },
            cName: "StabSoft",
            city: "Wrocław",
            flat: "1/16",
            street: "Kokosowa",
            email: "kontakt@stabsoft.pl",
            phone: "693-881-676",
            postal: "54-060",
            skype: "grzegorz.martowski",
            avatar: "http://stabsoft.pl/public/images/ja.jpg",
            github: "https://github.com/gmartowski",
            facebook: "https://www.facebook.com/stabsoft/"
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
