import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavItems extends Component {
    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink}> {this.props.item} </Link>
            </li>
        );
    }
}

export default NavItems;
