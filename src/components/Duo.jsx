import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Duo extends React.Component {
    constructor() {
        super();
        this.P1score = 0;
        this.P2score = 0;
        this.P1name = "";
        this.P2name = "";
    }

    render() {
        return(
            <div>
                <h2>Duo</h2>
                <h3>ROUND</h3>
                <div id="playerGrid">
                    <div id="P1case">{this.props.P1name}</div>
                    <div id="P2case">{this.props.P2name}</div>
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
    return {

    };
}


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Duo));