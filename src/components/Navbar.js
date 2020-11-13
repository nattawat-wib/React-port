import React, {Component} from 'react';
import NavItems from './NavItems';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'NavItemActive': ''
        }
    }

    render() {
        return(
            <nav>
                <ul>
                    <NavItems item='Home' tolink='/' ></NavItems>
                    <NavItems item='About' tolink='/about' ></NavItems>
                    <NavItems item='Education' tolink='/education' ></NavItems>
                    <NavItems item='Skill' tolink='/skill' ></NavItems>
                    <NavItems item='Contact' tolink='/contact' ></NavItems>
                </ul>
            </nav>
        );
    }
}

export default Navbar; 