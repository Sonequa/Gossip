import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
    }

    render() {
        return(
            <header className="header">
                <div className="zone-box">
                    <button></button>
                </div>
                <div className="underline"></div>
            </header>
        );
    }
}

export default Header;