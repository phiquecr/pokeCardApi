import React, { Component } from 'react';
import axios from 'axios';
import Image from './Img.js'
import './pokeStyle.css';
import logo from './Assets/logo2.png';

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
})

class pokeApi extends Component {
  state = {
    pokeList: []
  }

  async componentDidMount(){
    const response = await api.get()
    
    
    this.setState({
      pokeList: response.data.results
    })
  }





  render(){
    return(
      <div className="hub">
        <div className="pokezeresInBox">
          <img className="pokeLogo" src={logo}></img>
          <h1 className="pokeText">POKEZERES</h1>
        </div>
        <div className="pokeList">
          {this.state.pokeList.map((item, index) => (
            <div className="pokeListName" key={index}>
              <Image className="pokeImage" url={item.url} />
              <p className="pokeName">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}



export default pokeApi;
