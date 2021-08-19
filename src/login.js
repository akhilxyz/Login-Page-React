
import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        checked: true,
        passwordErr : false,
        usernameErr : false
    }

    // ------------------ On Login ------------------

    login = () => {
        if (this.state.username !== "akhil997"){
            return this.setState({usernameErr : true})
        }
        else if (this.state.password !== "Akhil@2020"){
            return this.setState({passwordErr : true})
        }
        else {
            window.alert("LOGGED IN")
        }
    }

    // ------------------ On Change ------------------

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.setState({usernameErr : false})
        this.setState({passwordErr : false})
    }

    render() {
        const { username, password, passwordErr, usernameErr } = this.state

        let ErrorPassword  = null ;
        let ErrorUsername  =  null ;

        let userInputBorder = {}
        let userPasswordBorder = {}

        
        if (usernameErr) {
            ErrorUsername = <div className="ErrorLogin"> Invalid Username </div> 
            userInputBorder = {borderColor : "red"}
        }

        if (passwordErr){
            ErrorPassword = <div className="ErrorLogin"> Invalid Password </div> 
            userPasswordBorder = {borderColor : "red"}
        }

        return (
            <div className="content" style={{ marginTop: "60px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="assets/images/login_bg.svg" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6 contents">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="mb-4">
                                        <h3>Sign In</h3>
                                        <p className="mb-4">Get all the access to the private content.</p>
                                    </div>
                                    <>
                                        <div className="form-group first">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" style={userInputBorder} value={username} onChange={this.onChange} className="form-control" id="username" name="username" />
                                        </div>
                                        {ErrorUsername}

                                        <div className="form-group last mb-4">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" style={userPasswordBorder} value={password} onChange={this.onChange} className="form-control" id="password" name="password" />
                                        </div>
                                       {ErrorPassword}

                                        <div className="d-flex mb-5 align-items-center">
                                            <label className="control control--checkbox mb-0"><span className="caption">Remember me {" "}</span>
                                                <input type="checkbox" defaultChecked={this.state.checked}
                                                    onChange={() => this.setState(prevState => ({
                                                        checked: !prevState.checked
                                                    }))} />
                                                <div className="control__indicator" />
                                            </label>
                                            <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span>
                                        </div>

                                        <span onClick={this.login} className="btn btn-block btn-primary">Log In </span>

                                        <span className="d-block text-left my-4 text-muted">— or login with —</span>
                                        <div className="social-login">
                                            <a href="#" className="facebook">
                                                <span className="icon-facebook mr-3" />
                                            </a>
                                            <a href="#" className="twitter">
                                                <span className="icon-twitter mr-3" />
                                            </a>
                                            <a href="#" className="google">
                                                <span className="icon-google mr-3" />
                                            </a>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
