import React, { Component } from 'react';
import Header from '../../component/Header/index';
import './authentic.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

@connect(
    state => state,
    {}
)
class Authentic extends Component {
    constructor(props) {
        super(props);
    }

    

    render() {
    	return(
    		<div className="authentic">
    			<Header/>
                <div className='login-box'>
                    <h2>SherrY</h2>
                    <input type="text"/>
                    <input type="text"/>
                    <div>
                        <button onClick={this.login}>Log in</button>
                        <Link to="signUp">注册账号</Link>
                    </div>
                </div>
    		</div>
    	);
    }
}

export default Authentic;