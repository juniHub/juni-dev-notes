import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

import { auth } from '../services/firebase';

class HomePage extends Component {
  render() {
    return (
      <div id="home">
        <Header></Header>
        <section className="welcome-banner">
          <div className="jumbotron jumbotron-fluid py-5">
            <div className="container text-center py-5 mt-5">
              <h1 className="display-5 mt-5">Welcome to <Link className='brandName' to="/login">juniNote</Link></h1>
              <p className="lead">Take notes for ideas and inspiration!</p>
              <div className="mt-4">
              {auth().currentUser
            ? <div>
            
             <Link className="btn btn-info px-5 mr-3" to="/notes">Explore Your Dashboard Now</Link>

            </div>
            : <div>
             
                <Link className="btn btn-info px-5" to="/login">Login</Link>
            </div>}
            <div className="svg-home">

            </div>
               
              </div>
            </div>
          </div>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}

export default HomePage;