import React, { Component } from 'react';
import '../Styles/Header.css'

class Header extends Component{
    
    render(){
        return(
            <header className='header'>
                <span id='header-title'>BaliDex</span>
                <nav>
                    <span>ADD</span>
                    <span>EDIT</span>
                    <span>DELETE</span>
                </nav>
            </header>
        );
    }
}

export default Header;