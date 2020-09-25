import React, { Component } from 'react';
import '../Styles/Header.css'

class Header extends Component{
    
    render(){
        return(
            <header className='header'>
                <span id='header-title'>BaliDex</span>
                <nav>
                    {this.props.add ? <span id='cancel-btn' onClick={this.props.cancelFN}>CANCEL</span>:<span id='add-btn' onClick={this.props.addFN}>ADD</span>}
                    {this.props.edit ? <span id='cancel-btn' onClick={this.props.cancelFN}>CANCEL</span>:<span id='edit-btn' onClick={this.props.editFN}>EDIT</span>}
                    
                    <span id='delete-btn' onClick={this.props.deleteFN}>DELETE</span>
                </nav>
            </header>
        );
    }
}

export default Header;