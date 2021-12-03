import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SidebarItemComponentPublic from '../sidebaritem/sidebarItemPublic';
import Chip from '@material-ui/core/Chip';

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

   
   
    if(notes) {

  

      return(
        <div className={ classes.root }>
      
         <h3>ALL PUBLIC NOTES</h3>
               
          <Grid container spacing={2} >
              {
                notes.map((_note, _index) => {
                  return (
                    
                <Grid item xs={ 12 } sm={ 6 } md={ 4 }>
                <Card key={ _index } className={classes.card}>
                <CardContent >
                
                      <Typography className={ classes.cardContent } variant="body2" component="p">
                      <Chip
                      className={classes.chip}
                      label={_note.category}
                              clickable />
                            
                    
                       

                      <SidebarItemComponentPublic
                        _note={_note}
                        _index={_index}
                        selectedNoteIndex={selectedNoteIndex}
                        selectNote={this.selectNote}
                        >
                      </SidebarItemComponentPublic>
                   
                    </Typography>
       
                    </CardContent>
                    </Card>
                    </Grid>
            
                
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

 

  selectNote = (n, i) => this.props.selectNote(n, i);


}

export default withStyles(styles)(CardComponentPublic);