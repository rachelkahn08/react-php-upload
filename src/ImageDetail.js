import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import Subheader from './Subheader';

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

			<div>
				<Subheader name="go back" />
				<div className="Image__Details--Container">
					<img className="Image__Details--Image" src={`http://circuslabs.net/~michele.james/php/thumbnails/${thumblink}`} alt={this.state.data.description}/>					
					<div className="Image__Details--Details">
						<div className="Image__h1--Container">
							<div className="Details__Title">{title}</div>
							<div className="Details__Score">{score}</div>
						</div>
						<div className="Details--Container--details">
							<div className="Image__h2--Container">
								<div className="Details__Username">Submitted by:</div>
								<div className="Details__Username--user">{username}</div>
							</div>							
							<div className="Details__Description">{description}</div>
							<div>{date}</div>
						</div>
					</div>
				</div>
			</div>
					)
	}
}

export default ImageDetail;




