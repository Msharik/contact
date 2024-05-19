import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Contact Management App</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/create">Create Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
