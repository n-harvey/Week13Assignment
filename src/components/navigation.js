import React from "react"; 

export default class Navigation extends React.Component { 
    render(){ 
        return ( 
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">React App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link one</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link two</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav> 
        ) 
    } 
}