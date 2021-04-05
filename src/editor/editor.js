import React from 'react';

import ReactQuill, {Quill} from 'react-quill';
import "react-quill/dist/quill.snow.css";

import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ImageCompress from 'quill-image-compress';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CategoryIcon from '@material-ui/icons/Category';


import '../App.css';

Quill.register('modules/imageCompress', ImageCompress);

class EditorComponent extends React.Component {
 
  toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
     [ 'blockquote'],
      [{ 'font': [] }],
   [{ 'header': 1 }, { 'header': 2 }],       

  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
     [ { 'direction': 'rtl' } ],  // text direction
    [{size: []}],                     
 
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme

     [ { 'align': [] } ],
    ['link', 'image', 'video'],

     [ 'clean' ],
                                        // remove formatting button
   ];

    modules = {
    syntax: true,
    toolbar: this.toolbarOptions,
    imageCompress: {
      quality: 0.8, // default
      maxWidth: 800, // default
      maxHeight: 800, // default
      imageType: 'image/jpeg', // default
      debug: true, // default
    },
      clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
  };
  
  constructor() {
    super();
    this.state = {
      category:'',
      text: '',
      title: '',
      id: '',
    
     };
  }

  componentDidMount = () => {
    this.setState( {
      category: this.props.selectedNote.category,
      text: this.props.selectedNote.body,
      title: this.props.selectedNote.title,
      id: this.props.selectedNote.id,
    });
  }

  componentDidUpdate = () => {
    if(this.props.selectedNote.id !== this.state.id) {
      this.setState( {
        category: this.props.selectedNote.category,
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
       
        <FormControl className={classes.formControl}>
        <InputLabel className={ classes.heading } id="categories"><CategoryIcon/>Categories</InputLabel>
        <Select className={ classes.categories }
          labelId="categories"
          id="category"
          value={this.state.category}
          onChange={(e) => this.updateCategory(e.target.value)}
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
        

        <div className={classes.titleHeading}>
        <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
       
        <input
          className={classes.titleInput}
          placeholder='You can edit your note title here'
          value={this.state.title ? this.state.title : 'You can edit your note title here'}
          onChange={(e) => this.updateTitle(e.target.value)}>
          </input>
        </div>

        <ReactQuill 
        
          theme={'snow'}
          value={this.state.text} 
          onChange={this.updateBody}
          modules={this.modules}
          placeholder="Enter your notes here!"
    
          >
           
        </ReactQuill>

        <div className={classes.clearButton}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={ this.clearBody }>
            Clear Note
            </Button>
        </div>
        
      </div>
    );
  }

  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };
  updateTitle = async ( txt ) =>
  {
    await this.setState( { title: txt } );
    this.update();
  };

   updateCategory = async (txt) => {
    await this.setState({ category: txt });
    this.update();
  }
  
  update = debounce(() => {
    this.props.noteUpdate( this.state.id, {
      category: this.state.category,
      title: this.state.title,
      body: this.state.text
    })
  }, 500);

 clearBody = async () =>
  {
    await this.setState( { text: '' } );
  }



}

export default withStyles(styles)(EditorComponent);