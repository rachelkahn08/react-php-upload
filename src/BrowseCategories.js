import React, { Component } from 'react';

import {Link} from "react-router-dom";

import Subheader from './Subheader';

import GalleryItem from './GalleryItem';


export default class BrowseCategories extends Component {

  constructor (props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount () {
    fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=browseCategories',{

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


  } 


  render() {


    return (
        <div>
          
          <ul className="Gallery">
          <Subheader name="BrowseCategories" />
           {this.state.data.map(item =>
                <Link to={"/CategorySelect/" + item.category} ><GalleryItem  key={item.category} {...item} className="Container--Gallery__Item"/></Link>)}
          </ul>


      </div>

    );
  }
}
