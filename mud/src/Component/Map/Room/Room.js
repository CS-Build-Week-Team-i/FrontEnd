import React from 'react';
import './Room.scss';
import styled from 'styled-components';

const Container = styled.div``;

const RoomRow = styled.div`
  display: flex;
`;

const RoomCol = styled.div`
  width: 20px;
  height: 20px;
  background: green;
`;

const Middle = styled(RoomCol)`
  background: blue;
`;

const North = styled(RoomCol)`
  background: ${props => (props.north ? 'orange' : 'green')};
`;

const South = styled(RoomCol)`
  background: ${props => (props.south ? 'orange' : 'green')};
`;
const East = styled(RoomCol)`
  background: ${props => (props.east ? 'orange' : 'green')};
`;
const West = styled(RoomCol)`
  background: ${props => (props.west ? 'orange' : 'green')};
`;

export const Room = props => {
  return (
    <Container>
      <RoomRow>
        <RoomCol />
        <North north={props.north} />
        <RoomCol />
      </RoomRow>
      <RoomRow>
        <West west={props.west} />
        <Middle />
        <East east={props.east} />
      </RoomRow>
      <RoomRow>
        <RoomCol />
        <South south={props.south} />
        <RoomCol />
      </RoomRow>
    </Container>
  );
};

// export const EmptyRoom = () => {
//   return (
//     <div style={{ height: '20px', width: '20px', background: 'blue' }}></div>
//   );
// };
