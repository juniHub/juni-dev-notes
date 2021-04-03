import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import CategoryIcon from '@material-ui/icons/Category';



class CategoryItem extends React.Component {

  render() {

    const { _index, _note, classes, selectedNoteIndex} = this.props;

    return(
  
      
        <ListItem key={_index}
          className={classes.listItem}
          selected={selectedNoteIndex === _index}
          
          onClick={() => this.selectNote(_note, _index)}>
          
        <div className={classes.textSection}>
       
                
        <Chip

        
        style={{background: "#f582ae"}}
        label={_note.category}
        clickable
      
      
        />
              
        </div>
         
        </ListItem>
   
    );
  }
  selectNote = (n, i) => this.props.selectNote(n, i);
 

}

export default withStyles(styles)(CategoryItem);