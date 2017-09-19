import React, { Component } from 'react';

import {Link} from "react-router-dom";

import GalleryItem from './GalleryItem';
import Subheader from './Subheader';

class CategorySelect extends Component {

  constructor (props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount () {

    fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=categorySelect&query='+this.props.match.params.category,{

        method: 'GET',
        headers: {
        },
    })
    .then( response => response.json())
    .then(json => (
    
       this.setState({
        data:json,
       })
      
    ));

    console.log(this.state.data);
  } 


  render() {

    return (

        <ul className="Gallery">
        <Subheader name={`Category: {this.state.data.category}`}/>
           {this.state.data.map(item =>
                <Link to={"/ImageDetail/" + item.id} ><GalleryItem  key={item.id} {...item} className="Container--Gallery__Item"/></Link>)}
        </ul>


    );
  }
}

export default CategorySelect;