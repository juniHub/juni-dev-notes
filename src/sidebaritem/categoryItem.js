import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';


class CategoryItem extends React.Component {

  render() {

    const { _index, _note, classes, selectedNoteIndex} = this.props;

    return(
  
      
        <ListItem key={_index}
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          alignItems='flex-start'
          onClick={() => this.selectNote(_note, _index)}>
          
        <div className={classes.textSection}>
       
                
        <Chip
        avatar={<Avatar>C</Avatar>}
        label={_note.category}
        clickable
        color="primary"
      
        deleteIcon={<DoneIcon />}
        />
              
        </div>
         
        </ListItem>
   
    );
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => {
    if(window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      this.props.deleteNote(note);
    }
  }

}

export default withStyles(styles)(CategoryItem);