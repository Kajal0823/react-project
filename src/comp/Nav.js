import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to='home'>Home</Link>
                <Link to='about'>About</Link>
                <Link to='listing'>Listing</Link>
                <Link to='/login'>Login</Link>

            </div>
        )
    }
}

export default Nav
