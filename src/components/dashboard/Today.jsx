import React, { Component } from "react";

class Today extends Component {
  render() {
    const d = new Date();
    const month = d.getDate;
    return (
      <div className="today">
        <div className="container">{d.toString()}</div>
      </div>
    );
  }
}
export default Today;
