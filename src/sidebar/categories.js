import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';
import CategoryItem from '../sidebaritem/categoryItem';
import InputBase from '@material-ui/core/InputBase';
//import SearchIcon from '@material-ui/icons/Search';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CategoryIcon from '@material-ui/icons/Category';

import { auth } from '../services/firebase';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      
      searchTerm: "",
      userName: auth().currentUser && auth().currentUser.displayName !== null? auth().currentUser.displayName: auth().currentUser && auth().currentUser.displayName === null? auth().currentUser.email:"Please log in to see the post's author",
      currentUserID: auth().currentUser ? auth().currentUser.uid : "",
     
    };
   
  }

  render() {

    const { notes, classes, selectedNoteIndex } = this.props;

    let filteredNotes = [];
   
    if(notes) {

      filteredNotes = notes.filter( ( note ) =>
      {

        return note.category.toLowerCase().indexOf( this.state.searchTerm.toLowerCase() ) !== -1
          || note.title.toLowerCase().indexOf( this.state.searchTerm.toLowerCase() ) !== -1;
 
      } );

      if ( this.state.searchTerm === 'All' || this.state.searchTerm === 'all' )
      {
        filteredNotes = notes.map( ( note ) => { return note });
      
      }

      return(
        <div className={ classes.sidebarContainer }>
      

          <div className={ classes.searchArea }>
          
           <div className={classes.search}>
          

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

        <FormControl className={classes.formControl}>
        <InputLabel className={ classes.heading } id="categories"><CategoryIcon/>Categories</InputLabel>
        <Select className={ classes.categories }
          labelId="categories"
          id="category"
          value={this.state.searchTerm}
          onChange={this.updateSearch.bind(this)}
          >
          <MenuItem className={ classes.selectCategory } value="All">All</MenuItem>
          <MenuItem className={ classes.selectCategory } value="React">React</MenuItem>
          <MenuItem className={ classes.selectCategory } value="MongoDB">MongoDB</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Firebase">Firebase</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Nextjs">Nextjs</MenuItem>
          <MenuItem className={ classes.selectCategory } value="GraphQL">GraphQL</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Gatsby">Gatsby</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Github">Github</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Ideas">Ideas</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Algorithm">Algorithm</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Api">Api</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Portfolio">Portfolio</MenuItem>
           <MenuItem className={ classes.selectCategory } value="Tutorial">Tutorial</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Open Source">Open Source</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Others">Others</MenuItem>
        </Select>
        </FormControl>
            
            
            
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