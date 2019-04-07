import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "userName",
      totalGoods: 100,
      userIcon: "./猫.png",
      contributions: ["./猫.png","./猫.png","./猫.png","./猫.png","./猫.png","./猫.png"],
    }
  }
  render() {
    return (
      <div className="profile">
        <div className="userHeader">
          <img className="userIcon" src={this.state.userIcon} />
          <div className="userName">
          {this.state.userName}
          </div>
          <div className="totalGoods">
          「いいね！」
          {this.state.totalGoods}
          </div>
        </div>
        <div className="contributions">
          {this.state.contributions.map((contribution, index) => {
            return <img key={index} className="contribution" src={contribution} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
