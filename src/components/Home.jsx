import React from 'react';
import logo from '../assets/img/logoBlack.png';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <img src={logo} className="logo" alt="Logo"/>
                <h3>Le jeu culte maintenant disponible en ligne !</h3>
            </div>);
    }
}