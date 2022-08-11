import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import GameCreate from './components/GameCreate/GameCreate.jsx';
import GameDetails from './components/GameDetails/GameDetails.jsx';
import Error404 from './components/Error404/Error404.jsx'
import SearchResults from './components/SearchBar/SearchResults.jsx';
import Contact from './components/Contact/Contact';
import './App.css'




function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/videogames/create' component={GameCreate} />
				<Route exact path='/videogames/:id' component={GameDetails} />
				<Route exact path='/results/:name' component={SearchResults} />
				<Route exact path='/contact' component={Contact} />
				<Route path='*'component={Error404} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;