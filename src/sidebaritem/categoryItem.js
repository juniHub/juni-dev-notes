import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import Chip from '@material-ui/core/Chip';

import { auth } from '../services/firebase';

class CategoryItem extends React.Component {

  render() {

    const { _index, _note, classes, selectedNoteIndex} = this.props;

    return (
      
       <> {auth().currentUser !== null && _note.currentUserID===auth().currentUser.uid? 
        
        <ListItem key={_index}
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          
          onClick={() => this.selectNote(_note, _index)}>
          
          <div className={ classes.textSection }>
            
               
        <Chip

        style={{background: "#f582ae"}}
        label={_note.category}
              clickable />
            
         
          
          <ListItemText
               
              primary={_note.title}
              secondary={`Posted by: ${_note.userName}`}
         
          >
                 
          </ListItemText>
              
        </div>

             
       
        </ListItem>
         : null}
         </>
   
    );
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
 
 

}

export default withStyles(styles)(CategoryItem);