import React, { Component } from 'react';

export default class Styles extends Component {
	constructor() {
		super();
	}

	FetchStyleSheet(width) { 
		var srcFile;

		if (width >= 750) {
			srcFile = ('./_Tablet.css');
			console.log(StyleSheet);
		} else if (width >= 950) {
			srcFile = ('./_Desktop.css');
			console.log(StyleSheet);
		} else {
			srcFile = ('./_Mobile.css');
		}
		
		return srcFile;
	}
}

export class EventListeners extends Styles {
	constructor() {
		super();
	}

	static UpdateStylesOnLoad() {
		window.onload = () => ( Styles.FetchStyleSheet );
	}
	
	static UpdateStylesOnResize() {
		let resizeTimeout = null;

		window.onresize = function() {
			if (resizeTimeout != null) {
				clearTimeout(resizeTimeout);
				resizeTimeout = null;
			} else if (resizeTimeout == null) {
				resizeTimeout = setTimeout( Styles.FetchStyleSheet, 500);
			}
		}

	}
}

// class FetchStyleSheet {
// 	constructor() {

// 	}
// }