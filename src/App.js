import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home'
import Start from './components/Start'
import Games from './components/Games'
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
                                <Link to="/play">Jouer</Link>
                            </li>
                            <li>
                                <Link to="/games">Parties</Link>
                            </li>
                            <li>
                                <Link to="/about">A propos</Link>
                            </li>

                        </ul>
                    </nav>

                    <Switch>

                        <Route path="/play">
                            <Start/>
                        </Route>
                        <Route path="/games">
                            <Games/>
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
