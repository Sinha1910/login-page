import React, { Component } from "react";

class Button extends Component {
        render () {
          console.log(this.props)
            return (
              <button
                className="button"
                onClick={this.props.loginForm}>Submit</button>
            );
          }
        };
      
      export default Button;








