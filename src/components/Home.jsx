import React from 'react';
import logo from '../assets/img/logoBlack.png';
import {Link} from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} className="logo" alt="Logo"/>
                <p>Le jeu culte de la <strong>Coding Factory</strong> maintenant maintenant disponible en ligne !</p>
                <Link to="/play"><button id="buttonStartGame">Jouer</button></Link>
            </div>);
    }
}