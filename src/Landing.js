import React, { Component } from 'react';
import Subheader from './Subheader';
import ImageCollection from './ImageCollection';

export default class Landing extends Component {
	render() {
		return(
			<div>
				<Subheader name="this is the landig page. we got pics." />
				<div>
					<ImageCollection />
				</div>
			</div>
			);
	}
}