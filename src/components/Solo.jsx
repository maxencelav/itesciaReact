import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';


class Solo extends React.Component {
    constructor() {
        super();
        this.P1score = 0;
        this.BOTscore = 0;
        this.P1name = ""
    }

    render() {
        return (
            <div>
                <h2>Solo</h2>
                <h3>ROUND</h3>
                <div id="playerGrid">
                    <div id="P1case">{this.props.P1name}</div>
                    <div id="BOTcase">BOT</div>
                </div>


            </div>);
    }
}

const mapStateToProps = state => {
    return {
        P1name: state.P1name
    };
}

const mapDispatchToProps = dispatch => {
    return {};
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Solo));