import React, { Component } from 'react';
import '../Styles/Thumbnail.css'

class Thumbnail extends Component{
    render(){
        const {img,id,name} = this.props;
        let selected = "";
        if(id === this.props.current)
            selected = 'selected';

        return(
            <div className={`pointer thumbnail ${selected}`} onClick={e=>this.props.changeFN(id)}>
                <h1 className='pointer thumbname' onClick={e=>this.props.changeFN(id)}>{name}</h1>
                <div className='pointer thumbnail-img-cont' onClick={e=>this.props.changeFN(id)}>
                    <img alt={name} className='pointer thumbnail-img' src={img} onClick={e=>this.props.changeFN(id)}/>
                </div>
            </div>
        );
    }
}

export default Thumbnail;