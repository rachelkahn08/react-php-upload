import React, { Component } from 'react';

export default class Gallery extends Component {
	
	render(){
		return(
			<div className ="Container--Gallery__Item thumb" onClick = {this.props.handleClick}>
				
				<div className="Item__Details--Container">
				<h2 className="Gallery__Item--Title">{this.props.title}</h2>
					<h6 className="Item__Score">{this.props.score}</h6>
				</div>
				<div className="Item__Image--Container">
					<div className="Image--Overflow-setup">
						{<img className="Item__Image" src={`http://circuslabs.net/~michele.james/php/thumbnails/${this.props.thumblink}`} alt={this.props.description}/>}
					</div>
				</div>
			</div>
		)}
 }