import React, { Component } from 'react';

class Social extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div className="Social" >
                <a href="#" target="__blank" rel="noopener noreferrer"> <i class="fab-fa-github"></i> </a>
                <a href="#" target="__blank" rel="noopener noreferrer"> <i class="fab-fa-instagram"></i> </a>
                <a href="#" target="__blank" rel="noopener noreferrer"> <i class="fab-fa-facebook"></i> </a>
            </div>
        );
    }
}

export default Social;