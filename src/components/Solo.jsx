import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import playerRed from "../assets/img/playerRed.png";
import playerGrey from "../assets/img/playerGrey.png";
import {addGame, addRound, setCPUScore, setP1Score} from "../redux/actions";

class Solo extends React.Component {
    constructor() {
        super();
        this.state = {
            P1name: "",
            P2name: "",
            round: 0
        }
        this.round = 2;
    }

    /**
     * Assigns to a player the move they just did
     * @param move R = ROCK, P = PAPER, S = SCISSORS
     * @param player 0 = P1, 1 = P2
     */
    move(move, player) {

        // gets the move for the player
        let playerMove = move;

        // generates a move for the CPU
        let cpuMove = ["R", "P", "S"][Math.floor(Math.random() * 3)];

        let currentPlayerScore = this.props.P1score;
        let currentCPUScore = this.props.CPUscore;
        //grabs the score for both players

        if (playerMove === 'R') { // if P1 plays ROCK
            if (cpuMove === 'R') { // if CPU plays ROCK
                this._winnerName.textContent = ("Égalité...");

            } else if (cpuMove === 'P') { // if CPU plays PAPER
                this._winnerName.textContent = ("BOT gagne !");
                currentCPUScore++;

            } else if (cpuMove === 'S') { // if CPU plays SCISSORS
                this._winnerName.textContent = (this.props.P1name + " gagne !");
                currentPlayerScore++;
            }

        } else if (playerMove === 'P') { // if P1 plays PAPER
            if (cpuMove === 'R') { // if CPU plays ROCK
                this._winnerName.textContent = (this.props.P1name + " gagne !");
                currentPlayerScore++;
            } else if (cpuMove === 'P') { // if CPU plays PAPER
                this._winnerName.textContent = ("Égalité...");

            } else if (cpuMove === 'S') { // if CPU plays SCISSORS
                this._winnerName.textContent = ("BOT gagne !");
                currentCPUScore++;
            }
        } else if (playerMove === 'S') { // if P1 plays SCISSORS
            if (cpuMove === 'R') { // if CPU plays ROCK
                this._winnerName.textContent = ("BOT gagne !");
                currentCPUScore++;

            } else if (cpuMove === 'P') { // if CPU plays PAPER
                this._winnerName.textContent = (this.props.P1name + " gagne !");
                currentPlayerScore++;

            } else if (cpuMove === 'S') { // if CPU plays SCISSORS
                this._winnerName.textContent = ("Égalité...");
            }
        }

        this.props.setCPUScore(currentCPUScore);
        this.props.setP1Score(currentPlayerScore);
        // sets the score after the move has been calculated

        switch (playerMove) { // change playerMove to be printable on the page
            case "R":
                playerMove = "Pierre"
                break;
            case "P":
                playerMove = "Feuille"
                break;
            case "S":
                playerMove = "Ciseaux"
                break;
            default:
                break;
        }
        switch (cpuMove) { // change cpuMove to be printable on the page
            case "R":
                cpuMove = "Pierre"
                break;
            case "P":
                cpuMove = "Feuille"
                break;
            case "S":
                cpuMove = "Ciseaux"
                break;
            default:
                break;
        }
        // sets the dialog box text to show both moves
        this._movesUsed.textContent = (playerMove + " VS " + cpuMove);

        // round increment
        this.props.addRound(this.round++);

        if (currentPlayerScore == this.props.WINscore) {
            this._buttonsP1.hidden = true;
            this._winnerName.textContent = (this.props.P1name + " a vaincu BOT !");
            // hides the buttons and shows the victory text

            this.addGame(this.props.P1name, currentPlayerScore, "BOT", currentCPUScore);
            // adds the game to the game history list

        } else if (currentCPUScore == this.props.WINscore) {
            this._buttonsP1.hidden = true;
            this._winnerName.textContent = ("BOT a vaincu " + this.props.P1name + " !");
            // hides the buttons and shows the victory text

            this.addGame("BOT", currentCPUScore, this.props.P1name, currentPlayerScore);
            // adds the game to the game history list

        }

    }

    /**
     * Loads once the page has fully loaded
     */
    componentDidMount() {
        if (this.props.P1name == undefined) {  // if the player is undefined
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
                <h2>Solo</h2>
                <h3>ROUND {this.props.round} - JUSQU'À {this.props.WINscore}</h3>
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
                    <div id="BOTcase">
                        <img src={playerGrey} alt="BOT"/>
                        <h4>BOT</h4>
                        <p className="playerScore">{this.props.CPUscore}</p>
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
        round: state.round,
        P1score: state.P1score,
        CPUscore: state.CPUscore,
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
        setCPUScore: score => {
            dispatch(setCPUScore(score))
        },
        addGame: game => {
            dispatch(addGame(game))
        }
    };
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Solo));