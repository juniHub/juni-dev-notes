import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponentPublic from '../sidebarItem/sidebarItemPublic';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import { auth } from '../services/firebase';

class SidebarComponentPublic extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      searchTerm: "",
      userName: auth().currentUser && auth().currentUser.displayName !== null? auth().currentUser.displayName: auth().currentUser && auth().currentUser.displayName === null? auth().currentUser.email:"Please log in to see the post's author",
      currentUserID: auth().currentUser? auth().currentUser.uid:"",
     
    };
   
  }

  render() {

    const { notes, classes, selectedNoteIndex } = this.props;

    let filteredNotes = [];
   
    if(notes) {

    filteredNotes = notes.filter((note) => {return note.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1 });

      return(
        <div className={classes.sidebarContainer}>
           <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
       
            </div>
            <InputBase
              placeholder="Search Title…"
              type='text'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={this.updateSearch.bind(this)}
              value = {this.state.searchTerm}
            />
          </div>

          {auth().currentUser === null?null:

              <div>
                <input 
                  className={classes.newNoteInput}
                  placeholder='Enter Note Title'
                  onChange={this.updateTitle.bind(this)}
                  type='text'
                  value={this.state.title}>
                </input>
                <Button 
                  className={classes.newNoteSubmitBtn}
                  onClick={this.newNote.bind(this)}>
                  <div className={classes.sendIcon}>
                    <SendIcon />
       
                  </div>
                  Submit</Button>
              </div>
    }
           
          <List>
              {
                filteredNotes.map((_note, _index) => {
                  return(
                    <div key={_index}>
                      <SidebarItemComponentPublic
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={this.selectNote}
                        deleteNote={this.deleteNote}>
                      </SidebarItemComponentPublic>
                      <Divider></Divider>
                    </div>
                  )
                })
              }
            </List>
          
        </div>
      );
    } else {
      return(<div></div>);
    }
  }

  updateTitle = (e) => {
    this.setState({ title: e.target.value });
   
  }

  updateSearch = (e) =>{
    this.setState({
      searchTerm: e.target.value.substr(0,20),
     
    })
  }


  newNote = () => {
    if(this.state.title !== ""){
    this.props.newNote(this.state.title, this.state.userName, this.state.currentUserID);
    this.setState({ title: ""});
    }
    else{
      this.props.newNote("default title without name", this.state.userName, this.state.currentUserID);
     
    }
  }

  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);

}

export default withStyles(styles)(SidebarComponentPublic);