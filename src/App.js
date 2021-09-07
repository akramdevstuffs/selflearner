import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';
import NotFound from './components/NotFound';
import Courses from './pages/courses';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/courses' component={Courses} />
		<Route path='/about' exact component={About} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
		<Route path='/' component={NotFound}/>
	</Switch>
	</Router>
);
}

export default App;
