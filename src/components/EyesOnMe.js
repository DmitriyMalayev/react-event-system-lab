import React, { Component } from "react";

class EyesOnMe extends Component {
  handleFocus = () => {
    console.log("Good!");
  };

  handleBlur = () => {
    console.log("Hey! Eyes on me!");
  };


  render() {
    return (
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}></button>
    );
  }
}

export default EyesOnMe;



//   render() {
//     return (
//       <canvas
//         onClick={toggleCycling}
//         onMouseMove={this.handleMouseMove}
//         onKeyPress={this.handleKeyPress}
//         // onKeyPress={resize}
//         width="900"
//         height="600"
//         tabIndex="0"
//       ></canvas>
//     );
//   }
// }