import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import playerRed from '../assets/img/playerRed.png';
import playerBlue from '../assets/img/playerBlue.png';
import {addGame, addRound, setCPUScore, setP1Score, setP2Score} from "../redux/actions";


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
                this._movesUsed.textContent = (this.props.P1name + " a joué.");
                this._winnerName.textContent = ("");
                // sets the current move of the player 1 and shows that they played
                break;
            case 1:
                this.P2move = move;
                this._movesUsed.textContent = (this.props.P2name + " a joué.");
                this._winnerName.textContent = ("");
                // sets the current move of the player 2 and shows that they played
                break;
        }

        let currentPlayer1Score = this.props.P1score;
        let currentPlayer2Score = this.props.P2score;
        //grabs the score for both players


        if (this.P1move === 'R') { // if P1 plays ROCK
            if (this.P2move === 'R') { // if P2 plays ROCK
                this._winnerName.textContent = ("Égalité...");

            } else if (this.P2move === 'P') { // if P2 plays PAPER
                this._winnerName.textContent = (this.props.P2name + " gagne !");
                currentPlayer2Score++;

            } else if (this.P2move === 'S') { // if P2 plays SCISSORS
                this._winnerName.textContent = (this.props.P1name + " gagne !");
                currentPlayer1Score++;
            }

        } else if (this.P1move === 'P') { // if P1 plays PAPER
            if (this.P2move === 'R') { // if P2 plays SCISSORS
                this._winnerName.textContent = (this.props.P1name + " gagne !");
                currentPlayer1Score++;

            } else if (this.P2move === 'P') { // if P2 plays PAPER
                this._winnerName.textContent = ("Égalité...");

            } else if (this.P2move === 'S') { // if P2 plays SCISSORS
                this._winnerName.textContent = (this.props.P2name + " gagne !");
                currentPlayer2Score++;
            }

        } else if (this.P1move === 'S') { // if P1 plays SCISSORS
            if (this.P2move === 'R') { // if P2 plays ROCK
                this._winnerName.textContent = (this.props.P2name + " gagne !");
                currentPlayer2Score++;

            } else if (this.P2move === 'P') { // if P1 plays PAPER
                this._winnerName.textContent = (this.props.P1name + " gagne !");
                currentPlayer1Score++;

            } else if (this.P2move === 'S') { // if P2 plays SCISSORS
                this._winnerName.textContent = ("Égalité...");
            }
        }

        this.props.setP2Score(currentPlayer2Score);
        this.props.setP1Score(currentPlayer1Score);
        // sets the score after the move has been calculated

        if (['R', 'P', 'S'].indexOf(this.P1move) >= 0 && ['R', 'P', 'S'].indexOf(this.P2move) >= 0) {
            // if both moves are ready
            switch (this.P1move) { // change P1move to be printable on the page
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
            switch (this.P2move) { // change P2move to be printable on the page
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
            // sets the dialog box text to show both moves
            this._movesUsed.textContent = (this.P1move + " VS " + this.P2move);

            // round increment
            this.props.addRound(this.round++);
        }

        if (currentPlayer1Score == this.props.WINscore) { // if player 1 has reached the max score
            this._buttonsP1.hidden = true;
            this._buttonsP2.hidden = true;
            this._winnerName.textContent = (this.props.P1name + " a vaincu " + this.props.P2name + " !");
            // hides the buttons and shows the victory text

            this.addGame(this.props.P1name, currentPlayer1Score, this.props.P2name, currentPlayer2Score);
            // adds the game to the game history list
        } else if (currentPlayer2Score == this.props.WINscore) { // if player 2 has reached the max score
            this._buttonsP1.hidden = true;
            this._buttonsP2.hidden = true;
            this._winnerName.textContent = (this.props.P2name + " a vaincu " + this.props.P1name + " !");
            // hides the buttons and shows the victory text

            this.addGame(this.props.P2name, currentPlayer2Score, this.props.P1name, currentPlayer1Score);
            // adds the game to the game history list

        }

    }

    /**
     * Loads once the page has fully loaded
     */
    componentDidMount() {
        if (this.props.P1name == undefined || this.props.P2name == undefined) {
            // if one of the two players is undefined
            this.props.history.push("/play") // returns to the play page
        }
    }

    addGame(nameWinner, scoreWinner, nameLoser, scoreLoser) {
        this.props.addGame({
            nameW: nameWinner,
            scoreW: parseInt(scoreWinner),
            nameL: nameLoser,
            scoreL: parseInt(scoreLoser),
        });
    }

    render() {
        return (
            <div>
                <h2>Duo</h2>
                <h3>ROUND {this.props.round} - JUSQU'À {this.props.WINscore}</h3>
                <div id="playerGrid">
                    <div id="P1case">
                        <img src={playerRed} alt="P1" ref={c => (this._playerRed = c)}/>
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
                        <img src={playerBlue} alt="P2" ref={c => (this._playerBlue = c)}/>
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
        },
        addGame: game => {
            dispatch(addGame(game))
        }
    };
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Duo));