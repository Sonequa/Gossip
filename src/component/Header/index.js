import React, { Component } from 'react';
import './header.css';
import axios from 'axios';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        }
    }

    getMessage = () => {
        // fetch("http://localhost:9000/")
        //     .then(res => res.text())
        //     .then(res => this.setState({message: res}))
        //     .catch(err => console.log(err))
        axios.get('http://localhost:9000/')
            .then(res => res.text())
            .then(res => this.setState({message: res}))
            .catch(err => console.log(err))
    }

    componentWillMount = () => {
        this.getMessage();
    }

    render() {
        return(
            <header className="header">
                <div className="box">
                    <span className="logo">Gossip</span>
                    {this.state.message}
                </div>
            </header>
        )
    }
}

export default Header;