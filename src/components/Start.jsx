import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setP1Name, setP2Name, addRound, setP1Score, setCPUScore, setP2Score, setWinScore} from "../redux/actions";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: []
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        let isModeOnePlayer = event.target[0].checked;
        let isModeTwoPlayers = event.target[1].checked;

        let player1Name = event.target[2].value;
        let player2Name = event.target[3].value;

        let selectedMaxScore = parseInt(event.target[4].value, 10);


        if (player1Name == "") { // if the text field is empty
            player1Name = "JOUEUR 1"
        }
        if (player2Name == "") { // if the text field is empty
            player2Name = "JOUEUR 2"
        }

        this.props.setP1Name(player1Name);
        this.props.setP2Name(player2Name);
        this.props.addRound(1);
        this.props.setP1Score(0);
        this.props.setP2Score(0);
        this.props.setCPUScore(0);
        this.props.setWinScore(selectedMaxScore);

        if (isModeOnePlayer && !isModeTwoPlayers) { // checks if the checked mode is 1 player
            return (
                this.props.history.push("/solo")
            );
        } else if (!isModeOnePlayer && isModeTwoPlayers) { // checks if the checked mode is 2 players
            return (
                this.props.history.push("/duo")
            );
        }


    }

    render() {
        return (
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <h2>Jouer</h2>
                    <h3>Choix du nombre de joueurs</h3>
                    <input type="radio" id="onePlayer" name="playernumber" value="onePlayer"
                           defaultChecked={true}></input>
                    <label htmlFor="onePlayer">1 joueur</label>
                    <br/>
                    <input type="radio" id="twoPlayers" name="playernumber" value="twoPlayers"></input>
                    <label htmlFor="twoPlayers">2 joueurs</label>

                    <h3>Noms des joueurs</h3>
                    <label>
                        Nom du joueur 1 :
                        <input type="text" name="p1name" id="p1name" defaultValue={"Alpha"}/>
                    </label>
                    <br/>
                    <label>
                        Nom du joueur 2 :
                        <input type="text" name="p2name" id="p2name" ref="p2name" defaultValue={"Beta"}/>
                    </label>
                    <br/>

                    <h3>Règles</h3>
                    <label>Score maximal :</label>
                    <input type="number" name="maxScoreSelect" id="maxScoreSelect" ref="maxScoreSelect" min="3"
                           max="100" defaultValue={3}/>
                    <br/>

                    <input type="submit" value="Jouer" id="buttonStartGame"/>

                </form>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        P1name: state.P1name,
        P2name: state.P2name

    }
}
const mapDispatchToProps = dispatch => {
    return {
        setP1Name: name => {
            dispatch(setP1Name(name))
        },
        setP2Name: name => {
            dispatch(setP2Name(name))
        },
        addRound: round => {
            dispatch(addRound(round))
        },
        setP1Score: score => {
            dispatch(setP1Score(score))
        },
        setP2Score: score => {
            dispatch(setP2Score(score))
        },
        setCPUScore: score => {
            dispatch(setCPUScore(score))
        },
        setWinScore: WINscore => {
            dispatch(setWinScore(WINscore))
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Start));
