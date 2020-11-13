import React, { Component } from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'myskills': ['HTML', 'CSS', 'JS', 'ReactJS', 'PHP', 'SQL']
        }
    }

    render(){
        return (
            <div className="condiv skills">
                <h1 className="subtopic"> My Skill </h1>
                <ul>
                    {this.state.myskills.map(skill => <li> {skill} </li>)}
                </ul>
            </div>
        );
    }
}

export default Skill;