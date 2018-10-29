import React, { Component, Fragment } from 'react';
import { Provider, AppContext } from '../../App/Provider';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export class Layout extends Component {
    render() {
        const Render = this.props.render;
        return (
            <Provider>
                <AppContext.Consumer>
                    {
                        (context) => (
                            <Fragment>
                                <Header />
                                <Render />
                                <Footer {...context} />
                            </Fragment>
                        )
                    }
                </AppContext.Consumer>
            </Provider>
        );
    }
}
