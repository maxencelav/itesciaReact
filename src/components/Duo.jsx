import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import playerRed from '../assets/img/playerRed.png';
import playerBlue from '../assets/img/playerBlue.png';


class Duo extends React.Component {
    constructor() {
        super();
        this.P1score = 0;
        this.P2score = 0;
    }

    /**
     * Assigns to a player the move they just did
     * @param move R = ROCK, P = PAPER, S = SCISSORS
     * @param player 0 = P1, 1 = P2
     */
    move(move, player) {

    }

    render() {
        return (
            <div>
                <h2>Duo</h2>
                <h3>ROUND</h3>
                <div id="playerGrid">
                    <div id="P1case">
                        <img src={playerRed} alt="P1"/>
                        <h4>{this.props.P1name}</h4>
                        <button id="rockButton" className="moveButton" onClick={() => this.move('R', 0)}></button>
                        <button id="paperButton" className="moveButton" onClick={() => this.move('P', 0)}></button>
                        <button id="scissorsButton" className="moveButton" onClick={() => this.move('S', 0)}></button>

                    </div>
                    <div id="P2case">
                        <img src={playerBlue} alt="P2"/>
                        <h4>{this.props.P2name}</h4>
                        <button id="rockButton" className="moveButton" onClick={() => this.move('R', 1)}></button>
                        <button id="paperButton" className="moveButton" onClick={() => this.move('P', 1)}></button>
                        <button id="scissorsButton" className="moveButton" onClick={() => this.move('S', 1)}></button>

                    </div>
                </div>

            </div>);
    }
}


const mapStateToProps = state => {
    return {
        P1name: state.P1name,
        P2name: state.P2name
    };
}

const mapDispatchToProps = dispatch => {
    return {};
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Duo));