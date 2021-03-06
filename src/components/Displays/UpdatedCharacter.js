import React from 'react';
import { connect } from 'react-redux';
import Torch1 from '../Decorations/Torch1';
import Torch2 from '../Decorations/Torch2';
import './UpdatedCharacter.css';

export function UpdatedCharacter(props) {
    return (
        <div className="update-card">
        <Torch1 />
        <div className="character-card">
            <div className="character-name">
                <label>
                    Name
                        <h1>{props.name}</h1>
                </label>
            </div>
            <div className="character-race">
                <label>
                    Race
                        <h1>{props.race}</h1>
                </label>
            </div>
            <div className="character-classification">
                <label>
                    Classification
                        <h1>{props.classification}</h1>
                </label>
            </div>
            <div className="character-weapon">
                <label>
                    Weapon
                        <h1>{props.weapon}</h1>
                </label>
            </div>
        </div>
        <Torch2 />
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: state.name,
    race: state.race,
    classification: state.classification,
    weapon: state.weapon
});

export default connect(mapStateToProps)(UpdatedCharacter);