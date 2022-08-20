import React from "react";
import LoginForm from "./login";
import Navigation from "./navigation";

export default class website extends React.Component {
    render(){
        return (
            <div>
                <Navigation />
                <LoginForm />
            </div>
        )
    }
}