import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';
import CategoryItem from '../sidebaritem/categoryItem';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import { auth } from '../services/firebase';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      searchTerm: "",
      userName: auth().currentUser && auth().currentUser.displayName !== null? auth().currentUser.displayName: auth().currentUser && auth().currentUser.displayName === null? auth().currentUser.email:"Please log in to see the post's author",
      currentUserID: auth().currentUser? auth().currentUser.uid:"",
     
    };
   
  }

  render() {

    const { notes, classes, selectedNoteIndex } = this.props;

    let filteredNotes = [];
   
    if(notes) {

      filteredNotes = notes.filter( ( note ) =>
      {
        return note.category.toLowerCase().indexOf( this.state.searchTerm.toLowerCase() ) !== -1;
 
      } );

      return(
        <div className={classes.sidebarContainer}>
           <div className={classes.search}>
            <div className={classes.searchIcon}>
            <SearchIcon />
       
            </div>
            <InputBase
              placeholder="Search Category…"
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

          
           
          <List>
              {
                filteredNotes.map((_note, _index) => {
                  return(
                    <div key={_index}>
                      <CategoryItem
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={this.selectNote}
                        deleteNote={this.deleteNote}>
                      </CategoryItem>
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

 
  updateSearch = (e) =>{
    this.setState({
      searchTerm: e.target.value.substr(0,20),
     
    })
  }


  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);

}

export default withStyles(styles)(Category);