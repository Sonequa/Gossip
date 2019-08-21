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
        // let data;
    	// await axios.get('/api/auth/login')
    	// 	.then(res => {
        //         console.log(res.data);
        //     })
        //     .catch(err => console.log(err));
        // this.setState({
        //     message: data
        // });
    	axios.get('/api/auth/login')
    		.then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    componentWillMount() {
        this.getMessage();
    }

    render() {
        let message = this.state.message; 
    	return(
    		<div className="authentic">
    			<Header/>
                {
                    message
                        ? <p>Successfully connected with server...{message}</p>
                        : <p>Loading...</p>
                }
    		</div>
    	);
    }
}

export default Authentic;