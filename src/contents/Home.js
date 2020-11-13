import React, { Component } from 'react';
import Social from '../components/Social'
// import profilepic from '../img/profile.jpg';
import ReactTypingEffect from 'react-typing-effect';

class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&h=3000&q=80' alt="profile" className="profilepic"/>
                <ReactTypingEffect text={["i'm Nut ella", "i'm Wev developer"]} speed={80} eraseDelay={2000} eraseSpeed={80} className='typingeffect' />
                <Social/>
            </div>
        );
    }
}

export default Home;