import React from 'react';
import { connect } from 'react-redux';
import Map from './Map/Map.js';
import './GamePage.scss';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  render() {
    return (
       <div className="main-map">
        <div className="map-header">
          <h1>This is the map</h1>
        </div>
        <div className="map-bottom">
          <div className="map-left">
            <Map />
          </div>
          <div className="map-right">
            <div className="right-header">
              <h1>Welcome Player!</h1> {/* Change player to username */}
            </div>
            <hr className="line"/>
            <div className="bottom-info">
              <div className="room-info">
                <h3>Room: (room stuff here)</h3>
                <p>Room description will go here. It could be long, so i am just going to type a little bit to make a decent lengthparagraph that would be comparable! Good!</p>
              </div>
              <div className="player-info">
                <h3>Name: User</h3>
                <h3>Items: Stick, Paper, String, Kleenex</h3>
                <h3>Health: 100</h3>
              </div>
              <hr className="line"/>
              <div className="player-control">
                <div className="top btn">
                  <button onClick={this.changeDir} value="n">UP</button>
                </div>
                <div className="mid-btns">
                  <div className="moveR btn">
                    <button onClick={this.changeDir} value="e">RIGHT</button>
                  </div>
                  <div className="moveL btn">
                    <button onClick={this.changeDir} value="w">LEFT</button>
                  </div>
                </div>
                <div className="bottom btn">
                  <button onClick={this.changeDir} value="s">DOWN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.loginReducer.error,
  loggingIn: state.loginReducer.loggingIn,
  signupMsg: state.loginReducer.signupMsg
});
export default connect(
  mapStateToProps,
  {  }
)(Login);