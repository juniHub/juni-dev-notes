import React from 'react';
import { Link } from 'react-router-dom';

import Category from '../sidebar/categories';
import CardComponentPrivate from '../card/cardNotePrivate';
import EditorComponent from '../editor/editor';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import EditIcon from '@material-ui/icons/Edit';
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
      newNote: false,
    
   
    };
   
  }
     
   handleDrawerToggle = async () => {
    await this.setState({
      mobileOpen: !this.state.mobileOpen
    });
   };
  
  createNote = async () => {
    await this.setState({
      newNote: !this.state.newNote,
     
    });
   };

  render ()
  {

    const { classes } = this.props;
  
  
    const drawer = (
    <div>
      <div className={classes.toolbar} />
   
      <Category

          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
        
          selectNote={this.selectNote}>
         

        </Category>
   
     
    </div>
    );
      
    return(

  
      <div className={ classes.root }>
        
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={ classes.toolBar }>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={this.handleDrawerToggle}
            className={classes.menuButton}
            >
            <SearchIcon />
            </IconButton>
            <Typography className={ classes.brandTitle } variant="h6" noWrap>
            <Link className={classes.linkLink} to="/"><HomeIcon/> </Link> 
            </Typography>

          <div className={classes.createButton}>
          <Button
            variant="outlined"
            color="inherit"
            onClick={ this.createNote }>
            <EditIcon/>
            </Button>
            </div>
            
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
         
          this.state.newNote ?
                
         <div style={{marginTop: "3rem"}}>
          <CardComponentPrivate
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}>
          </CardComponentPrivate> 
    
          </div> :
              
          this.state.selectedNote ?
          <EditorComponent selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          noteUpdate={this.noteUpdate}>

          </EditorComponent> :
          
                
          <div style={{marginTop: "3rem"}}>
          <CardComponentPrivate
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          selectNote={this.selectNote}
          newNote={this.newNote}>
          </CardComponentPrivate> 
    
          </div>
 
          }


          </main>
      </div>
    
    );
  }

  componentDidMount = () => {
    firebase
      .firestore()
      .collection( 'notes' )
      .orderBy("timestamp", "desc")
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
      .collection( 'notes' )
      .doc(id)
      .update( {
        
       
        category: noteObj.category,
        title: noteObj.title,
        body: noteObj.body,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        
      });
  }
  newNote = async (  category,title, userName, currentUserID) => {
    const note = {
      
      category: category,
      title: title,
      body: '',
      userName: userName,
      currentUserID: currentUserID,
    };

    const newFromDB = await firebase
      .firestore()
      .collection( 'notes' )
      .add( {
       
        category: note.category,
        title: note.title,
        body: note.body,
        userName: note.userName,
        currentUserID: note.currentUserID,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       
      } );
    
  

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
