import React, {Component} from 'react';
import NavItems from './NavItems';

class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'NavItemActive': ''
        }
    }

    activeItem = (item) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }

        this.setState ({ 'NavItemActive': item }, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        })
    }

    render() {
        return(
            <nav>
                <ul>
                    <NavItems item='Home' tolink='/'activenav={this.activeItem} ></NavItems>
                    <NavItems item='About' tolink='/about' activenav={this.activeItem}></NavItems>
                    <NavItems item='Education' tolink='/education' activenav={this.activeItem}></NavItems>
                    <NavItems item='Skill' tolink='/skill' activenav={this.activeItem}></NavItems>
                    <NavItems item='Contact' tolink='/contact' activenav={this.activeItem}></NavItems>
                </ul>
            </nav>
        );
    }
}

export default Navbar; 