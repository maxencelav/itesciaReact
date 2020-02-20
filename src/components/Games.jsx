import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Games extends React.Component {
    constructor() {
        super();

        this.state = {
            games: []
        }
    }


    render() {
        const {games} = this.props;
        return (
            <div>
                <h2>Parties</h2>
                <ol>
                    {games.map((game, index) => {
                        return (
                            <li key={index}>{game.nameW} ({game.scoreW} points) a battu {game.nameL} ({game.scoreL} points)</li>
                        );
                    })}
                </ol>
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        games: state.games
    };
}

export default withRouter(connect(mapStateToProps)(Games));