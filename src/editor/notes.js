import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import parse from 'html-react-parser';

import '../App.css';

class Notes extends React.Component {
   
  constructor() {
    super();
    this.state = {
      text: '',
      title: '',
      id: '',
     };
  }

  componentDidMount = () => {
    this.setState({
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  }

  componentDidUpdate = () => {
    if(this.props.selectedNote.id !== this.state.id) {
      this.setState({
        text: this.props.selectedNote.body,
        title: this.props.selectedNote.title,
        id: this.props.selectedNote.id,
      });
    }
  }

 
  render() {

    const { classes } = this.props;

    return(
      <div className={ classes.editorContainer }>
        <div className={classes.titleHeading}>
            <h3 className="heading">{this.state.title}</h3>
       
        </div>

        <div className={classes.noteContent}>

        <p>{parse(this.state.text)}</p>

        </div>
      
        
      </div>
    );
  }



}

export default withStyles(styles)(Notes);