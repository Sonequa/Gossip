import React, { Component } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

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
                    <button>
                        <FontAwesomeIcon icon={faWindowClose} />
                    </button>
                </div>
                <div className="underline"></div>
            </header>
        );
    }
}

export default Header;