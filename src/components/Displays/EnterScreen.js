import React from 'react';
import './EnterScreen.css';
import Torch1 from '../Decorations/Torch1';
import Torch2 from '../Decorations/Torch2';

export default function EnterScreen(props) {
    return (
        <div className="landing-page">
            <Torch1 />
            <div className="enter-screen">
                <div className="info">
                    <h1>Welcome to the RPG Character Builder</h1>
                    <h2>This is a fantasy character building application that lets you choose from a number of presets to build your hero. </h2>
                    <h3>Click on the button below to begin your journey</h3>
                </div>
                <button className="enter-button" value="Enter" onClick={e => props.onClick(e)} >Enter</button>
            </div>
            <Torch2 />
        </div>
    )
}