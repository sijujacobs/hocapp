import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Home from './components/Home';
import Album from './components/Album';
import DataLoadedPhoto from './components/Photo';
import User from './components/User';

import './css/style.css'
// import LoadedComponent from './components/DataList';
const App = () => {
  return (<div className="appContainer">
    <Router>
    <div>
		<div className="navMenu">
			<Link to="/">Home</Link>
			<Link to="/albums">Albums</Link>
			<Link to="/photos">Photos</Link>
			<Link to="/users">Users</Link>
		</div>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/albums" component={Album} />
        <Route path="/photos" component={DataLoadedPhoto} />
        <Route path="/users" component={User} />
      </Switch>
    </div>
    </Router>
    {/* <LoadedComponent /> */}
  </div>)
}

export default App;