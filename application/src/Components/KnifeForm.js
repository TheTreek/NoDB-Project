import React, { Component } from 'react';
import '../Styles/Form.css'

class KnifeForm extends Component{
    constructor(){
        super();
        this.state = {
            img: '',
            name: '',
            company: '',
            rating: '',
            handle: '',
            msrp: '',
            bladesteel: '',
            usedprice: ''
        }
    }

    componentDidMount(){
  this.props.getDataFN(this.props.knifeId);
    }

    componentDidUpdate(preData){
        if(preData.knifeData !== this.props.knifeData && this.props.edit){
            this.setState({
                img: this.props.knifeData.img,
                name: this.props.knifeData.name,
                company: this.props.knifeData.company,
                rating: this.props.knifeData.rating,
                handle: this.props.knifeData.handle,
                msrp: this.props.knifeData.msrp,
                bladesteel: this.props.knifeData.bladesteel,
                usedprice: this.props.knifeData.usedprice
            })
        }
    }

    handleChange(key,val){
        let obj = {};
        obj[key] = val
        this.setState(obj)
    }

    handleSubmit = ()=>{
        let newKnife = {
            img: this.state.img,
            name: this.state.name,
            company: this.state.company,
            rating: this.state.rating,
            handle: this.state.handle,
            msrp: this.state.msrp,
            bladesteel: this.state.bladesteel,
            usedprice: this.state.usedprice
        }
        this.props.addFN(newKnife,this.state.add);
        this.setState({
            img: '',name: '',company: '',rating: '', handle: '', msrp: '', bladesteel: '', usedprice: ''
        });
    }

    render(){
        return(
            <div id='knifeForm'>
                <div className = 'img-stuff'>
                    <img alt = {this.state.name} id='form-img' src={this.state.img}/>
                    <span><span className='form-title'>Image URL: </span>
                        <input value={this.state.img} onChange={e=>this.handleChange('img',e.target.value)}/>
                    </span>
                </div>
                <div id='rest-of-form'>
                    <span className='input' id='name'>
                        <span className='form-title'>Name: </span>
                        <input value={this.state.name} onChange={e=>this.handleChange('name',e.target.value)}/>
                    </span>
                    <span className='input' id='Company'>
                        <span className='form-title'>Company: </span>
                        <input value={this.state.company} onChange={e=>this.handleChange('company',e.target.value)}/>
                    </span>
                    <span className='input' id='msrp'>
                        <span className='form-title'>MSRP: </span>
                        <input value={this.state.msrp} onChange={e=>this.handleChange('msrp',e.target.value)}/>
                    </span>
                    <span className='input' id='rating'>
                        <span className='form-title'>Rating: </span>
                        <input value={this.state.rating} onChange={e=>this.handleChange('rating',e.target.value)}/>
                    </span>
                    <span className='input' id='bladesteel'>
                        <span className='form-title'>Blade Steel: </span>
                        <input value={this.state.bladesteel} onChange={e=>this.handleChange('bladesteel',e.target.value)}/>
                    </span>
                    <span className='input' id='handle'>
                        <span className='form-title'>Handle Material: </span>
                        <input value={this.state.handle} onChange={e=>this.handleChange('handle',e.target.value)}/>
                    </span>
                    <span className='input' id='usedprice'>
                        <span className='form-title'>Used Price: </span>
                        <input value={this.state.usedprice} onChange={e=>this.handleChange('usedprice',e.target.value)}/>
                    </span>
                    <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default KnifeForm;