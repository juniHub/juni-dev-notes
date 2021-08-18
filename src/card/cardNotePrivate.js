import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CategoryIcon from '@material-ui/icons/Category';
import { auth } from '../services/firebase';
import Chip from '@material-ui/core/Chip';

class CardComponentPrivate extends React.Component {
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
   
    if(notes) {

    //filteredNotes = notes.filter((note) => {return note.title.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1 });

      return(
        <div className={ classes.root }>
          

        <div className={classes.inputContainer}>
        
        <input 
                  className={classes.newNoteInput}
                  placeholder='New Note Title'
                  onChange={this.updateTitle.bind(this)}
                  type='text'
                  value={this.state.title}>
        </input>
    

        <FormControl className={classes.formControl}>
        <InputLabel className={ classes.heading } id="categories"><CategoryIcon/>Select Category</InputLabel>
        <Select className={ classes.categories }
          labelId="categories"
          id="category"
          value={this.state.category}
           onChange={this.updateCategory.bind(this)}
        >
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
            
          <Button 
                  className={classes.newNoteSubmitBtn}
                  onClick={this.newNote.bind(this)}>
                  <div className={classes.sendIcon}>
                
                  </div>
                  Submit
                  
          </Button>


        </div>
           
          <Grid container spacing={2} >
            {
              notes.map( ( _note, _index ) =>
              {
                
                return (
           <>
                  {
                    auth ().currentUser !== null && _note.currentUserID === auth().currentUser.uid ?
                     <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
   
                      <Card key={ _index } className={ classes.card }>
                        <CardContent >
                
                              <Typography className={ classes.cardContent } variant="body2" component="p">
                                
                              <Chip
                              className={classes.chip}
                              label={_note.category}
                                  clickable />
                                                                

                              <SidebarItemComponent
                              
                              _note={ _note }
                              _index={ _index }
                              selectedNoteIndex={ selectedNoteIndex }
                              selectNote={ this.selectNote }
                              deleteNote={ this.deleteNote }>
                            </SidebarItemComponent>
                                
                          </Typography>
                        </CardContent>
                        </Card> </Grid> : null
                         
                    }
                
                    
                    </>
                  )
                })
              }
              
              </Grid>
          
        </div>
      );
    } else {
      return(<div className={classes.cardRoot}>No Note Available</div>);
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