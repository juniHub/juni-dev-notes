import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';


function getUserName(emailAddress){

  let removeAt=emailAddress.indexOf("@");
  let userName=emailAddress.slice(0,removeAt);

  return userName;

}

function Header() {

  return (
    <header>
      <nav className="navbar navbar-expand-sm fixed-top navbar-dark">
      {auth().currentUser && auth().currentUser.displayName !== null? <>Welcome:&nbsp;
      <strong className="text-info">{auth().currentUser.displayName}</strong></>:
      auth().currentUser && auth().currentUser.displayName === null? 
      <>Welcome:&nbsp;
      <strong className="text-info">{getUserName(auth().currentUser.email)}</strong></>:
        <Link className="navbar-brand" to="/">juniDevNote</Link>}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          {auth().currentUser
            ? <div className="navbar-nav">
              <Link className="text-info nav-item nav-link mt-2 mr-3" to="/notes"><strong>Dashboard</strong></Link>
              <button className="btn btn-info mr-3" onClick={() => auth().signOut()}>Logout</button>
            </div>
            : <div className="navbar-nav">
              <Link className="text-info nav-item nav-link mr-3" to="/allnotes"><strong>All Notes</strong></Link>
              <Link className="text-info nav-item nav-link mr-3" to="/login"><strong>Sign In</strong></Link>
            
            </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;