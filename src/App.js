import React from 'react';
import './App.css';
import Draggable from 'react-draggable';

class App extends React.Component {
  render() {
    return (
      <div className='studily'>
      <Draggable>
        <div className="drag-wrapper">
          <div>You can drag me now.</div>
        </div>
      </Draggable>
      <Draggable>
        <div className="drag-wrapper">
          <div>Notes App</div>
        </div>
      </Draggable>
      </div>
    );
  }
}
export default App;
