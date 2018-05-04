import React from 'react';
import { connect } from 'react-redux';
import Name from '../Inputs/Name';
import Race from '../Inputs/Race';
import Class from '../Inputs/Class';
import Weapon from '../Inputs/Weapon';
import TopNav from '../Inputs/TopNav';
import { setName, setRace, setClassification, setWeapon, updateCharacterAction } from '../../actions';
import './UpdateForm.css';

export class UpdateForm extends React.Component {

    render() {
        return (
            <div className="update-screen">
            <TopNav />
            <form className="update-choices" onSubmit={e => { e.preventDefault(); this.props.dispatch(updateCharacterAction(this.props.id, e)) }}>
            <h1 className="title">Update your character</h1>
                <Name className="name-input" name={this.props.name} onInput={e => { e.preventDefault(); this.props.dispatch(setName(e.target.value)) }} />
                <Race race={this.props.race} onChange={e => { e.preventDefault(); this.props.dispatch(setRace(e.target.value)) }} />
                <Class classification={this.props.classification} onChange={e => { e.preventDefault(); this.props.dispatch(setClassification(e.target.value)) }} />
                <Weapon weapon={this.props.weapon} onChange={e => { e.preventDefault(); this.props.dispatch(setWeapon(e.target.value)) }} />
                <input type="submit" value="Submit" className="update-button" />
            </form>
            </div>
        )
    };
};

const mapStateToProps = (state) => ({
    name: state.name,
    race: state.race,
    classification: state.classification,
    weapon: state.weapon,
    id: state.id
});

export default connect(mapStateToProps)(UpdateForm);