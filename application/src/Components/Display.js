import React, {Component} from 'react';
import '../Styles/Display.css';

class Display extends Component{
    componentDidMount(){
        this.props.getDataFN(this.props.knifeId);
    }

    render(){
        let {name,company,msrp,rating,bladesteel,handle,usedprice,img} = this.props.knifeData;
        return(
            <div id='display'>
                <div id='dis-img-container'>
                    <img id='display-img' alt={`${name}`} src={img}/>
                </div>
                <div id='dis-info'>
                    <h1 id='name'>{name}</h1>
                    <span className='dis-info' id='company'><span>Company: </span>{company}</span>
                    <span className='dis-info' id='msrp'><span>MSRP: </span>{msrp}</span>
                    <span className='dis-info' id='rating'><span>Rating: </span>{rating}</span>
                    <span className='dis-info' id='bladesteel'><span>Blade Steel: </span>{bladesteel}</span>
                    <span className='dis-info' id='handle'><span>Handle Material: </span>{handle}</span>
                    <span className='dis-info' id='usedprice'><span>Used Price: </span>{usedprice}</span>
                </div>
            </div>
        );
    }
}

export default Display;