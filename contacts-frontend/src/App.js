import React from 'react';
import ContactList from './components/ContactList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Contact Management</h1>
            </header>
            <ContactList />
        </div>
    );
};

export default App;
