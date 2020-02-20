import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setP1Name, setP2Name} from "../redux/actions";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: []
        }
    }



    enablePlayerTwoName() {
        console.log('aaaa');
        var input = document.getElementById('p2name');
        //var input = this.refs.p2name.value;

        if (this.checked) {
            input.disabled = false;
            console.log('prout check')
        } else {
            input.disabled = true;
            console.log('prout uncheck')
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        let isModeOnePlayer = event.target[0].checked;
        let isModeTwoPlayers = event.target[1].checked;

        let player1Name = event.target[2].value;
        let player2Name = event.target[3].value;

        console.log("SUMBIT PLAY", player1Name,player2Name)

        this.props.setP1Name(player1Name);
        this.props.setP2Name(player2Name);

        if (isModeOnePlayer && !isModeTwoPlayers) {
            return (
                this.props.history.push("/solo")
            );
        } else if (!isModeOnePlayer && isModeTwoPlayers) {
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
                        <input type="text" name="p1name" id="p1name"/>
                    </label>
                    <br/>
                    <label>
                        Nom du joueur 2 :
                        <input type="text" name="p2name" id="p2name" ref="p2name"/>
                    </label>
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
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Start));
