import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home'
import Solo from './components/Solo'
import Duo from './components/Duo'
import Scores from './components/Scores'
import About from './components/About'


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/solo">Solo</Link>
                            </li>
                            <li>
                                <Link to="/duo">Duo</Link>
                            </li>
                            <li>
                                <Link to="/scores">Score</Link>
                            </li>
                            <li>
                                <Link to="/about">À propos</Link>
                            </li>

                        </ul>
                    </nav>

                    <Switch>

                        <Route path="/solo">
                            <Solo/>
                        </Route>
                        <Route path="/duo">
                            <Duo/>
                        </Route>
                        <Route path="/scores">
                            <Scores/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>

                </div>
            </Router>
        );
    }
}
