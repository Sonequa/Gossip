import React, { Component } from 'react';
import Header from '../../component/Header/index';
import './authentic.css';

class Authentic extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	return(
    		<div className="authentic">
    			<Header/>
                <div className='login-box'>
                    <h2>Login</h2>
                    <input type="text"/>
                    <input type="text"/>
                </div>
    		</div>
    	);
    }
}

export default Authentic;