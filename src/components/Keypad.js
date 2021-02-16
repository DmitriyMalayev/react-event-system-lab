import React, { Component } from "react";

class Keypad extends Component {
//   handleKeyPress(event) {
//     if (event.type === keyUp) {
//       console.log("Entering password");
//     }
//   }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={()=> console.log("Entering password...")} />
      </div>
    );
  }
}

export default Keypad;


