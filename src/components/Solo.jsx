import React from 'react';

export default class Solo extends React.Component {
    constructor() {
        super();
        this.P1score = 0;
        this.P2score = 0;
    }

    render() {
        return(
            <div>
                <h2>Solo</h2>
                <p>Entrez les noms des deux joueurs :</p>
                <div id="playerGrid">
                    <div id="P1case">P1</div>
                    <div id="P2case">P2</div>
                </div>

            </div>);
    }
}