import React, { Component } from 'react';
import './footer.less';

export class Footer extends Component {

    render() {
        return (
            <footer className="footer">

                <div className="footer__info">
                    <div>StabSoft</div>
                    <div>Grzegorz Martowski</div>
                    <div>Kokosowa 1/16</div>
                    <div>54-060 Wrocław</div>
                </div>

                <div className="footer__contact">
                    <div>693-881-676</div>
                    <div><a href="mailto:kontakt@stabsoft.pl">kontakt@stabsoft.pl</a></div>
                </div>

                <div className="footer__social">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-linkedin"></i>
                </div>
            </footer>
        );
    }
}
