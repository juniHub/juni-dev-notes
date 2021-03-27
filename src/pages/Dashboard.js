import React from 'react';
import { Link } from 'react-router-dom';

import SidebarComponent from '../sidebar/sidebar';

import EditorComponent from '../editor/editor';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import appStyle from './appStyle';

import firebase from 'firebase';
import { auth } from '../services/firebase';

class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {

      selectedNoteIndex: null,
      selectedNote: null,
      notes: null,
    
      mobileOpen: false,
   
    };
   
  }
     
   handleDrawerToggle = async () => {
    await this.setState({
      mobileOpen: !this.state.mobileOpen
    });
   };

  render ()
  {

    const { classes } = this.props;
  
  
    const drawer = (
    <div>
      <div className={classes.toolbar} />
   
        <Divider />
        <SidebarComponent

          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}>

        </SidebarComponent>
   
     
    </div>
    );
      
    return(

  
      <div className={ classes.root }>
          <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={ classes.toolBar }>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={this.handleDrawerToggle}
            className={classes.menuButton}
            >
            <MenuIcon />
             Notes
           
          </IconButton>
            <Typography className={ classes.brandTitle } variant="h6" noWrap>
            <Link className={classes.linkLink} to="/"><HomeIcon/> Home </Link> 
          </Typography>
            <Button color="inherit" onClick={() => auth().signOut()}><Link className={classes.linkLink} to="/"> Logout </Link></Button>
        </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="item-list">
          <Hidden smUp implementation="css">
          <Drawer
       
            variant="temporary"
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
          {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
        <main className={classes.content}>
        <div className={classes.toolbar} />
        {
          this.state.selectedNote?
          <EditorComponent selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          noteUpdate={this.noteUpdate}>

          </EditorComponent> :
          <h5 className={classes.info}>Click on the "Notes" menu bar to see list of notes or create new one if your are signed in!</h5>
          }
          </main>
      </div>
    
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  }

  selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote: note });
  noteUpdate = (id, noteObj) => {
    firebase
      .firestore()
      .collection('notes')
      .doc(id)
      .update({
        title: noteObj.title,
        body: noteObj.body,
       
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  }
  newNote = async (title, userName, currentUserID) => {
    const note = {
      title: title,
      body: '',
      userName: userName,
      currentUserID: currentUserID,
    };
    const newFromDB = await firebase
      .firestore()
      .collection('notes')
      .add({
        title: note.title,
        body: note.body,
        userName: note.userName,
        currentUserID: note.currentUserID,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    const newID = newFromDB.id;
    await this.setState({ notes: [...this.state.notes, note] });
    const newNoteIndex = this.state.notes.indexOf(this.state.notes.filter(_note => _note.id === newID)[0]);
    this.setState({ selectedNote: this.state.notes[newNoteIndex], selectedNoteIndex: newNoteIndex });
  }
  
  deleteNote = async (note) => {
    const noteIndex = this.state.notes.indexOf(note);
    await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });
    if(this.state.selectedNoteIndex === noteIndex) {
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    } else {
      this.state.notes.length > 1 ?
      this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1) :
      this.setState({ selectedNoteIndex: null, selectedNote: null });
    }

    firebase
      .firestore()
      .collection('notes')
      .doc(note.id)
      .delete();
  }
}

export default withStyles(appStyle) (Dashboard);