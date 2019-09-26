import React from 'react';

import './Map.scss';

class Map extends React.Component {
  render() {
    return (
      <div className="main-map">
        <div className="map-header">
        
          <h1>This is the map</h1>
        </div>
        

        <div className="map-bottom">

          <div className="map-left">
            
            {/* Game view will also go inside here */}
            
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

            </div>

          </div>

        </div>
      </div>
    )
  }
}

export default Map;
