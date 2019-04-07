import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="profile">
        <div className="userHeader">
          <img className="userIcon" src="./猫.png" />
          <div className="userName">
          username
          </div>
          <div className="totalGoods">
          「いいね！」
          100
          </div>
        </div>
        <div className="contributions">
        <img className="contribution" src="./猫.png" />
        <img className="contribution" src="./猫.png" />
        <img className="contribution" src="./猫.png" />
        <img className="contribution" src="./猫.png" />
        <img className="contribution" src="./猫.png" />
        <img className="contribution" src="./猫.png" />
        </div>
      </div>
    );
  }
}

export default App;
