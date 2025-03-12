import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Hello, guest!",
            buttonText: "Log in"
        }
    };


    handleClick() {
        this.setState((prevState, prevProps) => {
          return {
            name: prevState.name === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in",
          }
        });
    };
       
    
    render() {
        return (
            <>
                <h1 className={css.NavBar}>My Gallery</h1>
                <div>
                    <span>{this.state.name}</span>
                    <button onClick = {() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </>
        );
    }
};

export default NavBarSimple;