import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import GalleryItem from './GalleryItem';

import Subheader from './Subheader';


class ImageCollection extends Component {

 constructor(props) {
   super(props);

   this.state = {
       images: [],
       data:[]
     }
   }
  

     componentDidMount() {
   
      fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=gallery',{

            method: 'GET',
           
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

            <ul className="Gallery">
            <Subheader name="All Images" />
           {this.state.data.map(item =>
                <Link to={"/ImageDetail/" + item.id} ><GalleryItem  key={item.id} {...item} className="Container--Gallery__Item"/></Link>)}
            </ul>
            
        )
    }
}



export default ImageCollection;
