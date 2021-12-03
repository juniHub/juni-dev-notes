import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers";

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      console.log(error)
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid py-5">
        <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
          <h1>
            Sign Up to
          <Link className="title ml-2 brandName" to="/">juniNote</Link>
          </h1>
        
          <div className="form-group">
            {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
         
          </div>
          <p>Sign up with any of these services</p>
          <button className="btn btn-info mr-2" type="button" onClick={this.googleSignIn}>
            Sign up with Google
          </button>
          <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
            Sign up with GitHub
          </button>
          <hr></hr>
          <p>Already have an account? <Link className="text-info" to="/login">Login</Link></p>
        </form>
      </div>
    )
  }
}