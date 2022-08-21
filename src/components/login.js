import React from "react";

export default class LoginForm extends React.Component {
    render(){
        return (
            <div class="container d-flex justify-content-center align-items-center" style={{height: '90vh'}}>
                <div class="row border border-dark pb-1">
                    <h3>Log In</h3>
                    <div class="col text-center ">
                        <input type="text" class="form-control bg-dark text-light" placeholder="username"></input>
                        <br></br>
                        <input type="password" class="form-control bg-dark text-light" placeholder="password"></input>
                        <br></br>
                        <button class="btn btn-success form-control">Log In</button>
                    </div>
                </div>
            </div>
        )
    }
}