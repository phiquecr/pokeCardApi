import React, { Component } from "react";
import axios from "axios";
import './pokeStyle.css';

class Image extends Component {
  state = {
    image: []
  };

  async componentDidMount() {
    const response = await axios.get(this.props.url);

    console.log(response.data.sprites);

    this.setState({
      image: response.data.sprites.other.dream_world.front_default
    });
  }

  render() {
    return (
      <div>
        <img className="pokeImage" src={this.state.img}/>
      </div>
    );
  }
}

export default Image;
