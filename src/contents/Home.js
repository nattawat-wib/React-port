import React, { Component } from 'react';
import Social from '../components/Social'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className="condiv home">
                <img src="" alt=""/>
                <Social/>
            </div>
        );
    }
}

export default Home;