import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import playerRed from '../assets/img/playerRed.png';
import playerBlue from '../assets/img/playerBlue.png';
import {addRound, setCPUScore, setP1Score, setP2Score} from "../redux/actions";


class Duo extends React.Component {
    constructor() {
        super();
        this.state = {
            P1name: "",
            P2name: "",
            round: 0
        }
        this.round = 2;
        this.P1move = "";
        this.P2move = "";

    }

    /**
     * Assigns to a player the move they just did
     * @param move R = ROCK, P = PAPER, S = SCISSORS
     * @param player 0 = P1, 1 = P2
     */
    move(move, player) {

        switch (player) {
            case 0:
                this.P1move = move;
                break;
            case 1:
                this.P2move = move;
                break;
        }

        let currentPlayer1Score = this.props.P1score;
        let currentPlayer2Score = this.props.P2score;

        console.log(currentPlayer1Score, currentPlayer2Score)

        console.log(this.P1move + " vs " + this.P2move);

        if (this.P1move === 'R') {
            if (this.P2move === 'R') {
                console.log("equal")
                this._winnerName.textContent = ("Égalité...");
            } else if (this.P2move === 'P') {
                console.log("P2 Wins");
                this._winnerName.textContent = (this.props.P2name + " gagne !");
                currentPlayer2Score++;
            } else if (this.P2move === 'S') {
                console.log("P1 Wins")
                this._winnerName.textContent = (this.props.P1name + " gagne !");
                currentPlayer1Score++;
            }
        } else if (this.P1move === 'P') {
            if (this.P2move === 'R') {
                console.log("P1 Wins")
                this._winnerName.textContent = (this.props.P1name + " gagne !");
                currentPlayer1Score++;
            } else if (this.P2move === 'P') {
                console.log("equal")
                this._winnerName.textContent = ("Égalité...");

            } else if (this.P2move === 'S') {
                console.log("P2 Wins")
                this._winnerName.textContent = (this.props.P2name + "gagne !");
                currentPlayer2Score++;
            }
        } else if (this.P1move === 'S') {
            if (this.P2move === 'R') {
                console.log("P2 Wins")
                this._winnerName.textContent = (this.props.P2name + " gagne !");
                currentPlayer2Score++;
            } else if (this.P2move === 'P') {
                console.log("P1 Wins")
                this._winnerName.textContent = (this.props.P1name + " gagne !");
                currentPlayer1Score++;
            } else if (this.P2move === 'S') {
                console.log("equal")
                this._winnerName.textContent = ("Égalité...");
            }
        }

        this.props.setP2Score(currentPlayer2Score++);
        this.props.setP1Score(currentPlayer1Score++);

        if (['R', 'P', 'S'].indexOf(this.P1move) >= 0 && ['R', 'P', 'S'].indexOf(this.P2move) >= 0) { //check equal to only R P or S for both
            switch (this.P1move) {
                case "R":
                    this.P1move = "Pierre"
                    break;
                case "P":
                    this.P1move = "Feuille"
                    break;
                case "S":
                    this.P1move = "Ciseaux"
                    break;
            }
            switch (this.P2move) {
                case "R":
                    this.P2move = "Pierre"
                    break;
                case "P":
                    this.P2move = "Feuille"
                    break;
                case "S":
                    this.P2move = "Ciseaux"
                    break;
            }
            this._movesUsed.textContent = (this.P1move + " VS " + this.P2move);

            // round increment
            this.props.addRound(this.round++);
        }

        if (currentPlayer1Score == this.props.WINscore) {
            this._buttonsP1.hidden = true;
            this._buttonsP2.hidden = true;
            this._winnerName.textContent = (this.props.P1name + " a vaincu " + this.props.P2name + " !");

        } else if (currentPlayer2Score == this.props.WINscore) {
            this._buttonsP1.hidden = true;
            this._buttonsP2.hidden = true;
            this._winnerName.textContent = (this.props.P2name + " a vaincu " + this.props.P1name + " !");

        }

    }

    render() {
        return (
            <div>
                <h2>Duo</h2>
                <h3>ROUND {this.props.round} - BEST OF {this.props.WINscore}</h3>
                <div id="playerGrid">
                    <div id="P1case">
                        <img src={playerRed} alt="P1"/>
                        <h4>{this.props.P1name}</h4>
                        <p className="playerScore">{this.props.P1score}</p>
                        <div ref={c => (this._buttonsP1 = c)}>
                            <button type="button" id="rockButton" className="moveButton"
                                    onClick={() => this.move('R', 0)}></button>
                            <button type="button" id="paperButton" className="moveButton"
                                    onClick={() => this.move('P', 0)}></button>
                            <button type="button" id="scissorsButton" className="moveButton"
                                    onClick={() => this.move('S', 0)}></button>
                        </div>
                    </div>
                    <div id="P2case">
                        <img src={playerBlue} alt="P2"/>
                        <h4>{this.props.P2name}</h4>
                        <p className="playerScore">{this.props.P2score}</p>

                        <div ref={c => (this._buttonsP2 = c)}>
                            <button type="button" id="rockButton" className="moveButton"
                                    onClick={() => this.move('R', 1)}></button>
                            <button type="button" id="paperButton" className="moveButton"
                                    onClick={() => this.move('P', 1)}></button>
                            <button type="button" id="scissorsButton" className="moveButton"
                                    onClick={() => this.move('S', 1)}></button>
                        </div>
                    </div>

                </div>
                <div id="winPopUp" className="redWin" ref={c => (this._winPopUp = c)}>
                    <h4 ref={c => (this._movesUsed = c)}></h4>
                    <span id="winnerName" ref={c => (this._winnerName = c)}></span>
                </div>
            </div>);
    }
}


const mapStateToProps = state => {
    return {
        P1name: state.P1name,
        P2name: state.P2name,
        round: state.round,
        P1score: state.P1score,
        P2score: state.P2score,
        WINscore: state.WINscore

    };
}

const mapDispatchToProps = dispatch => {
    return {
        addRound: round => {
            dispatch(addRound(round))
        },
        setP1Score: score => {
            dispatch(setP1Score(score))
        },
        setP2Score: score => {
            dispatch(setP2Score(score))
        }
    };
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Duo));