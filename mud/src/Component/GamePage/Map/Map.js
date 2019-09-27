import React from 'react';
import { Room, EmptyRoom } from './Room/Room';
import './Map.scss';

class Map extends React.Component {
  state = {
  }

  render() {
    return (
      <div className='map'>
        {/*{this.state.grid.map(row => {
          return row.map(room => {
            return <Room {...room} />;
          });
        })}*/}
      </div>
    )
  }
}

export default Map;