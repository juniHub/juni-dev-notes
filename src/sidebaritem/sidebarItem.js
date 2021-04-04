import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
//import { removeHTMLTags } from '../helpers';
import { auth } from '../services/firebase';

import { Alert, AlertTitle } from '@material-ui/lab';


class SidebarItemComponent extends React.Component {

  render() {

    const { _index, _note, classes, selectedNoteIndex} = this.props;

    return(
  
     <> {auth().currentUser !== null && _note.currentUserID===auth().currentUser.uid? 
        <ListItem key={_index}
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          alignItems='flex-start'
          onClick={() => this.selectNote(_note, _index)}>
           
            <div 
              className={classes.textSection}
           >
                <ListItemText
               
                  primary={_note.title}
                  secondary={`Posted by: ${_note.userName}`}
                  
                >
                 
                </ListItemText>
          </div>
          
            
            {auth().currentUser !== null && _note.currentUserID===auth().currentUser.uid? <DeleteIcon onClick={() => this.deleteNote(_note)}
              className={classes.deleteIcon}></DeleteIcon> : null
            }
        </ListItem>
        : null}
        </>
   
    );
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
  deleteNote = (note) => {
    if(window.confirm(`Are you sure you want to delete: ${note.title}`)) {
      this.props.deleteNote( note );
    
    }
  }

}

export default withStyles(styles)(SidebarItemComponent);