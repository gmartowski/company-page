import * as React  from 'react';
import { Link } from 'react-router-dom';
import './navbar.less';

export class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
