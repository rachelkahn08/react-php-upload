import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';



class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		}

		fetch('http://circuslabs.net/~michele.james/php/handle_fetch.php?type=categoryList',{

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
			<div className="Sidebar">
				<nav className="Sidebar__nav">
					<h1>Narrow By Category</h1>
					<div className="Sidebar__navlink-container">
						<NavLink className="Sidebar__nav--link" to='/ImageCollection'>All</NavLink>
						<NavLink className="Sidebar__nav--link" to='/BrowseCategories'>Browse Categories</NavLink>
						{this.state.data.map((link, index) => 
								<NavLink key={index + link.category} className="Sidebar__nav--link" to={`/cat:${link.category}`}>{link.category}</NavLink>)}
					</div>
				</nav>
			</div>
		)
	}
}

export default Sidebar;



