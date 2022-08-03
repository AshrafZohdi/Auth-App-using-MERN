import React, { component } from "react";
import { Link } from "react-router-dom";

class Login extends component {
    constructor() {
        super();
        this.state = {
            email:'',
            password:'',
            errors: {}
        };
    };

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const userData = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(userData);
    };

    render() {
        const { errors } = this.state;

        return(
            <div className="container">
                <div style={{marginTop:"4rem"}} className="row">
                    <div className="col s8 offset-s2">
                        <Link
                            to="/"
                            className="btn-flat waves-effect"
                        >
                            <i className="material-icons left">
                                keyboard_backspace
                            </i>
                            Back to Home
                        </Link>
                        /* This is where I stopped. Carry on from here*/
                    </div>
                </div>
            </div>
        )
    }
}