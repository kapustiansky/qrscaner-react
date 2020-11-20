import React, { Component } from 'react';

import './result.css';

class Result extends Component {

    render() {
        return (
            <div className="link-container">
                <strong>You Result:</strong>
                <a href={this.props.item} target="_blank">{this.props.item}</a>
            </div>           
            )
    }
}

export default Result;