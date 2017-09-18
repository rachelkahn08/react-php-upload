import React, { Component } from 'react';


export default class Subheader extends Component {
	render() {
		return (
			<div className="Subheader">{this.props.name}</div>
			);
	}
}