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

	    fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=getDetails&query=' + this.props.match.params.id,{

	            method: 'GET',
	            headers: {
	            },
	        })
	        .then(response => (
	        	response.json()
	        ))
	        .then(json => (
	           this.setState({
	            data:json,
	        })
	          
	        ));

	     }
	

	render() {

		var title = this.state.data && this.state.data.title;
		var score = this.state.data && this.state.data.score;
		var username = this.state.data && this.state.data.username;
		var date = this.state.data && this.state.data.date;
		var description = this.state.data && this.state.data.description;
		var thumblink = this.state.data && this.state.data.thumblink;

		return (
			<div className="Details--Container">
				<h2 className="Details__Title">{title}</h2>
				<h6 className="Details__Score">{score}</h6>
				<h6>{username}</h6>
				<h6>{date}</h6>
				<h4>{description}</h4>
				<div className="Details__Image--Container">
				<img className="Item__Image" src={`http://circuslabs.net/~michele.james/php/thumbnails/${thumblink}`} alt={this.state.data.description}/>
				</div>
			</div>
			
			
		)
	}
}

export default ImageDetail;


//
				//

//<GalleryItem  key={this.state.data.id} {...this.state.data} className="Container--Gallery__Item"/>


