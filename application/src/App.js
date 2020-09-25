import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import Display from './Components/Display';
import List from './Components/List';
import KnifeForm from './Components/KnifeForm';
import Footer from './Components/Footer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentKnife: '-1',
      knifeList: [],
      knifeData: {},
      edit: false,
      add: false
    }
  }

  componentDidMount(){
    //Set state properties from API -----------------------------------------------
    axios.get('/api/knives')
      .then(res =>{
        this.setState({currentKnife: res.data[0].id, knifeList: res.data});
      }).catch(err=>console.log(err));
  }

  changeCurrent = (id)=>{
    this.setState({currentKnife: id})
    this.getKnifeInformation(id);
    window.scrollTo(0,0);
  }

  startEdit = ()=>{
    this.setState({edit: true,add: false});
  }

  startAdd = ()=>{
    this.setState({add: true,edit: false});
  }

  cancelEdit = ()=>{
    this.setState({add:false,edit: false});
  }


  getKnifeInformation = (knifeId)=>{
        if(knifeId < 0){
        //If knifeId is less than zero (Hasn't been set yet)
            axios.get('/api/knives')
                .then(res=>{
                    knifeId = res.data[0].id;
                    axios.get(`/api/knife/${knifeId}`)
                    .then(res2=>{
                        this.setState({knifeData: res2.data})
                    }).catch(err=>console.log(err));
                }).catch(err=>console.log(err));
        }else{
            axios.get(`/api/knife/${knifeId}`)
            .then(res=>{
                this.setState({knifeData: res.data})
            })
            .catch(err=>console.log(err));
        }
  }
  
  addKnife = (knife,newKnife)=>{
    if(this.state.add){
      axios.post('/api/knife/add',knife)
        .then(res=>{
          this.setState({knifeList: res.data});
          this.getKnifeInformation(this.state.currentKnife);
        }).catch(err=>console.log(err))
    }else{
      axios.put(`/api/knife/update/${this.state.currentKnife}`,knife)
        .then(res=>{
          this.setState({knifeList: res.data});
        }).catch(err=>console.log(err))
    }
    this.setState({edit: false, add: false});
  }

  deleteKnife = ()=>{
    axios.delete(`/api/knife/delete/${this.state.currentKnife}`)
      .then(res=>{
        this.setState({knifeList: res.data, currentKnife: res.data[0].id});
        this.getKnifeInformation(this.state.currentKnife);
      }).catch(err=>console.log(err));
  }

  render(){

    let main = <Display knifeId={this.state.currentKnife} knifeData = {this.state.knifeData} getDataFN = {this.getKnifeInformation} />;
    
    if(this.state.edit || this.state.add){
      main = <KnifeForm knifeData = {this.state.knifeData} getDataFN = {this.getKnifeInformation} knifeId = {this.state.currentKnife} addFN = {this.addKnife} add = {this.state.add} edit = {this.state.edit} />;
    }

    return (
      <div className="App">
        <Header
          addFN = {this.startAdd}
          editFN = {this.startEdit}
          cancelFN = {this.cancelEdit}
          deleteFN = {this.deleteKnife}
          edit = {this.state.edit}
          add = {this.state.add}
        />
        <div className="body-container">
          {main}
          <List
            knives = {this.state.knifeList}
            changeFN = {this.changeCurrent}
            current = {this.state.currentKnife}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
