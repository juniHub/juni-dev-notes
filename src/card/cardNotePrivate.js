import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { auth } from '../services/firebase';

class CardComponentPrivate extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
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
        <div className={classes.cardRoot}>
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
        <FormControl className={classes.formControl}>
        <InputLabel className={ classes.heading } id="categories">Categories</InputLabel>
        <Select className={ classes.categories }
          labelId="categories"
          id="category"
          value={this.state.category}
           onChange={this.updateCategory.bind(this)}
        >
          <MenuItem className={ classes.selectCategory } value="React">React</MenuItem>
          <MenuItem className={ classes.selectCategory } value="MongoDB">MongoDB</MenuItem>
          <MenuItem className={ classes.selectCategory } value="Others">Others</MenuItem>
        </Select>
        </FormControl>


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
           
         <div className={classes.cardContainer}>
            {
              filteredNotes.map( ( _note, _index ) =>
              {
                
                return (
                <>
                  {
                    auth ().currentUser !== null && _note.currentUserID === auth().currentUser.uid ?
   
                      <Card key={ _index } className={ classes.cardContent }>
                        <CardContent >
                
                          <Typography className={ classes.cardBody } variant="body2" component="p">
                            <SidebarItemComponent
                              _note={ _note }
                              _index={ _index }
                              selectedNoteIndex={ selectedNoteIndex }
                              selectNote={ this.selectNote }
                              deleteNote={ this.deleteNote }>
                            </SidebarItemComponent>
                                
                          </Typography>
                        </CardContent>
                      </Card> : null
                    }
                    </>
                  )
                })
              }
              </div>
          
        </div>
      );
    } else {
      return(<div>No Note Available</div>);
    }
  }

   updateCategory = (e) => {
    this.setState({ category: e.target.value });
   
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
    this.props.newNote(this.state.category, this.state.title, this.state.userName, this.state.currentUserID);
    this.setState({ title: "", category :""});
    }
    else{
      this.props.newNote(this.state.category, "default title without name", this.state.userName, this.state.currentUserID);
      
    }
  }

  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => this.props.deleteNote(note);

}

export default withStyles(styles)(CardComponentPrivate);