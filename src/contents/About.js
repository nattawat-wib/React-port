import React, { Component } from 'react';
import Social from '../components/Social'

class About extends Component {
    render() {
        return (
            <div className="condiv about">
                <h1 className="subtopic"> About Me </h1>
                <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&h=3000&q=80' alt="profile" className="profilepic"/>
                <h3> Hi. i'm Nut ella </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, atque ex maxime, accusantium, aperiam quasi molestiae et tenetur at quae sunt exercitationem sed adipisci quisquam quam hic nisi inventore. Placeat.
                </p>
                <Social />
            </div>

        );
    }
}

export default About;