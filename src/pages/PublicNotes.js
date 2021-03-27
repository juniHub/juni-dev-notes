import React from 'react';
import { Link } from 'react-router-dom';

import SidebarComponentPublic from '../sidebar/sidebarPublic';
import Notes from '../editor/notes';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import HomeIcon from '@material-ui/icons/Home';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import appStyle from './appStyle';

import firebase from 'firebase';

class PublicNotes extends React.Component {

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
        <SidebarComponentPublic 
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
          selectNote={this.selectNote}
        >

        </SidebarComponentPublic>
   
     
    </div>
    );
      
    return(

  
      <div className={ classes.root }>
          <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
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
          this.state.selectedNote ?
          <Notes 
          selectedNote={this.state.selectedNote}
          selectedNoteIndex={this.state.selectedNoteIndex}
          notes={this.state.notes}
         >

          </Notes> :
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
 
  
}

export default withStyles(appStyle) (PublicNotes);
