import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container" style={{
                padding: "20px 0"
            }}>
                <div className="tx-c">系统由 React + NodeJS + Ant Desgin驱动</div>
                <div className="tx-c">By YIn</div>
            </div>
        );
    }
}

export default Footer;