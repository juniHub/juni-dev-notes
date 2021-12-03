import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: ""
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
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
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
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div id="signin">
      <Header></Header>
      <section className="welcome-banner">
      <div className="jumbotron jumbotron-fluid py-5">
      <div className="container text-center py-5 mt-5">
        <form
          className="mt-5 py-5 px-5"
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <h1>
            Login to
            <Link className="title ml-2 brandName" to="/">
              juniNote
            </Link>
          </h1>

          <div className="form-group">
            {this.state.error ? (
              <p className="text-danger">{this.state.error}</p>
            ) : null}
           
          </div>
          <p>Log in with any of these services</p>
          <button className="btn btn-info mr-2" type="button" onClick={this.googleSignIn}>
            Sign in with Google
          </button>
          <button className="btn btn-secondary" type="button" onClick={this.githubSignIn}>
            Sign in with GitHub
          </button>

         
    
          <p className="mt-5">
            Don't have an account? <Link className="text-info" to="/signup">Sign up</Link>
          </p>
          
        </form>
        <div className="svg-signin">

       </div>
        </div>
        </div>
        </section>
        <Footer></Footer>
        </div>
    );
  }
}