import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Moment from 'react-moment';

class SidebarItemComponentPublic extends React.Component {

  render() {

    const { _index, _note, classes, selectedNoteIndex} = this.props;

    return(
  
      
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
         
        </ListItem>
   
    );
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
 

}

export default withStyles(styles)(SidebarItemComponentPublic);