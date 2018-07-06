import React from 'react';
import './EnterScreen.css';
import Torch1 from '../Decorations/Torch1';
import Torch2 from '../Decorations/Torch2';
import LoginForm from '../Forms/LoginForm';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


export function EnterScreen(props) {

    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div className="landing-page">
            <Torch1 />
            <div className="enter-screen">
                <LoginForm />
                <Link to="/register" className="register">Register</Link>
            </div>
            <Torch2 />
        </div>
    )
}


/*const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});*/

export default connect()(EnterScreen);