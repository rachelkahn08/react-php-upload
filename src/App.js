import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './Header';
import Sidebar from './Sidebar';
import ImageCollection from './ImageCollection';
import ImageDetail from './ImageDetail';
import CategorySelect from './CategorySelect';
import Landing from './Landing';
import Subheader from './Subheader';
import BrowseCategories from './BrowseCategories'

require('./main.css');

class App extends Component {

  render() {
   
    return (
      <BrowserRouter>
        <div className="App">
      
          <Header />
          
          <Sidebar />

          <div className="App__body">
              <Switch>
                <Route path="/" exact component={ImageCollection} />
                <Route path="/ImageCollection" component={ImageCollection} />
                 <Route path="/BrowseCategories" component={BrowseCategories} />
                <Route path="/ImageDetail/:id" component={ ImageDetail } />
                <Route path="/CategorySelect/:category" component={ CategorySelect } />
              </Switch>
          </div>

        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;


//<Subheader name="Check out our sweet sweet images" />