import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render(){
        return (
            <div className="condiv">
                <h1 className="subtopic"> My Education </h1>
                <Widecard title="Front-end Web Developer" where="Facebook" from="2020" to="Present" />
                <Widecard title="Developer" where="Facebook Hi School" from="2016" to="2019" />
            </div>
        );
    }
}

export default Education;
