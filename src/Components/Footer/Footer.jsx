import React, { Component } from 'react';
import './footer.less';

export class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__logo">Logo</div>
                <div className="footer__copyright">Copyright &copy;</div>
            </footer>
        );
    }
}
