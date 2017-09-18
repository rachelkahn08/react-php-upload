import React, { Component } from 'react';
import GalleryItem from './GalleryItem';

class ImageDetail extends Component {

	constructor(props) {
		super(props);

		this.state = {
			data: {}
		}
	}

	componentDidMount() {

		console.log(this.props.match);
	    fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=detail&query=' + this.props.match.params.id,{

	            method: 'GET',
	            headers: {
	            },
	        })
	        .then((response) => {
	        	response.json();
	        })
	        .then(json => (
	           this.setState({
	            data:json,
	        })
	          
	        ));

	        console.log(this.state.data.title);
	    }
	

	render() {

		return (

			
			
			<div></div>	
		)
	}
}

export default ImageDetail;

//<GalleryItem  key={this.state.data.id} {...this.state.data} className="Container--Gallery__Item"/>


// <div className ="Container--Gallery__Item detail">
				
// 				<div className="Item__Details--Container">
// 				<h2 className="Gallery__Item--Title">{this.state.data.title}</h2>
// 					<h6 className="Item__Score">{this.state.data.score}</h6>
// 					<h6>{this.state.data.username}</h6>
// 					<h6>{this.state.data.date}</h6>
// 					<h4>{this.state.data.description}</h4>
// 				</div>
// 				<div className="Item__Image--Container">
// 					<div className="Image--Overflow-setup">
// 						{<img className="Item__Image" src={`http://circuslabs.net/~michele.james/php/thumbnails/${this.state.data.thumblink}`} alt={this.state.data.description}/>}
// 					</div>
// 				</div>
// 			</div>