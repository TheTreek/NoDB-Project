import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import Display from './Components/Display';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentKnife: '-1',
      knifeList: []
    }
  }

  componentDidMount(){
    //Set state properties from API -----------------------------------------------
    axios.get('/api/knives')
      .then(res =>{
        this.setState({currentKnife: res.data[0].id, knifeList: res.data});
      }).catch(err=>console.log(err));
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <div className="body-container">
          <Display
            knifeId={this.state.currentKnife}
            />
        </div>
      </div>
    );
  }
}

export default App;
