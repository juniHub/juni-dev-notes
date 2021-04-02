import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponentPublic from '../sidebaritem/sidebarItemPublic';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import { auth } from '../services/firebase';

class CardComponentPublic extends React.Component {
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

          <div className={classes.cardContainer}>
              {
                filteredNotes.map((_note, _index) => {
                    return (
                <Card key={ _index } className={classes.cardContent}>
                <CardContent >
                
                    <Typography className={classes.cardBody} variant="body2" component="p">
                      <SidebarItemComponentPublic
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={this.selectNote}
                        deleteNote={this.deleteNote}>
                        </SidebarItemComponentPublic>
                              
                    </Typography>
                            </CardContent>
                        </Card>
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

export default withStyles(styles)(CardComponentPublic);