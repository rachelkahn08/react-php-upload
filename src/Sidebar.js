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
					<div className="Sidebar__navlink-container">
						<NavLink className="Sidebar__nav--link" to='/' exact >Home</NavLink>
						<NavLink className="Sidebar__nav--link" to='/ImageCollection'>All</NavLink>
						<NavLink className="Sidebar__nav--link" to='/BrowseCategories'>Browse Categories</NavLink>
					</div>
				</nav>
			</div>
		)
	}
}

export default Sidebar;


// {this.state.data.map((link, index) => 
// 								<NavLink key={index + link.category} className="Sidebar__nav--link" to={`/CatgorySelect/${link.category}`}>{link.category}</NavLink>)}



