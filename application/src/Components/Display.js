import React, {Component} from 'react';
import axios from 'axios';
import '../Styles/Display.css';

class Display extends Component{

    constructor(){
        super();
        this.state = {
            data: {}
        }
    }

    componentDidMount(){
        let knifeId = this.props.knifeId;
        if(knifeId < 0){
        //If knifeId is less than zero (Hasn't been set yet)
            axios.get('/api/knives')
                .then(res=>{
                    knifeId = res.data[0].id;
                    axios.get(`/api/knife/${knifeId}`)
                    .then(res2=>{
                        this.setState({data: res2.data})
                    }).catch(err=>console.log(err));
                }).catch(err=>console.log(err));
        }else{
            axios.get(`/api/knife/${knifeId}`)
            .then(res=>{
                this.setState({data: res.data})
                console.log(res.data);
            })
            .catch(err=>console.log(err));
        }
    }

    render(){
        let {id,name,company,msrp,rating,bladesteel,handle,usedprice,img} = this.state.data;
        console.log(id,name,company,msrp,rating,bladesteel,handle,usedprice,img)
        return(
            <div id='display'>
                <div id='dis-img-container'>
                    <img id='display-img' src={img}/>
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