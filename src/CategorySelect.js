import React, { Component } from 'react';

import {Link} from "react-router-dom";

class CategorySelect extends Component {

  constructor (props) {
    console.log('category select');
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
      <div className = "categories">
      {this.state.data.map(category => (
          <Link to={"/ImageDetail/" + category.id} ><div className="categories">

          <h1>{this.props.match.params.name} pictures</h1>

            <Link to={`/categories/${category.category}`}>
              {category.category}<br/>
            </Link>

            <img className="categoryImage" src={"http://circuslabs.net/~michele.james/php/thumbnails/"+category.imagelink}/><br/>
            {category.title}<br/>
            {category.date}<br/>

            <br/>
          </div></Link>
        ))}


      </div>

    );
  }
}

export default CategorySelect;