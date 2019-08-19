import React, { Component } from 'react';
import Header from '../Header/index.js';
import axios from 'axios';
import './authentic.css';

class Authentic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    getMessage = () => {
        axios.get('/api/auth/login')
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    componentWillMount() {
        this.getMessage();
    }

    render() {
        return(
            <div className="authentic">
                <Header></Header>
            </div>
        );
    }
}

export default Authentic;