import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: false,
            endpoint: 'http://localhost:9000',
        };
    }

    componentDidMount = () => {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on('FromAPI', res => {
            this.setState({
                response: res
            });
        });
    }

    render() {
        const { response } = this.state;
        return(
            <div className='chat'>
                {
                    response 
                        ? <p>The current time is: {response}</p>
                        : <p> Loading... </p>
                }
                <p><Link to='auth'>Click me</Link></p>
            </div>
        );
    }
}

export default Chat;