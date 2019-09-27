import React from 'react';
import { grid } from '../../data';
import { Room, EmptyRoom } from './Room/Room';
import './Map.scss';

const test = {
  north: 't',
  south: 's'
};
class Map extends React.Component {
  state = {
    grid: grid
  };

  render() {
    return (
      <div className='map'>
        {this.state.grid.map(row => {
          return row.map(room => {
            return <Room {...room} />;
          });
        })}
      </div>
    );
  }
}

export default Map;
