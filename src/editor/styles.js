import { fade } from '@material-ui/core/styles';

const styles = theme => ( {
  

  editorContainer: {
     
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '2rem',
    marginTop: '6rem',
    background: '#fef6e4',
   
  },


  titleInput: {
  
    boxSizing: 'border-box',
    
    fontSize: '25px',
    textAlign: 'center',
    width: '100%',
    height: '60px',
    marginLeft: '20px',
    backgroundColor: '#fef6e4',
    color: '#001858',
    border: 'none',
   
    '&:focus': {
      outline: 'none',
    },
      
  },

  titleHeading: {
  
    boxSizing: 'border-box',
    marginTop: '2rem',
    padding: '2rem',
    height: '60px',
    width: '90%',
   
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '2px dashed #f582ae',
 
     
  },

  heading: {
    padding: '1rem',
    color: '#232946 !important',
  },

   
  noteContent:{

    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem',
    padding: '2rem',
    
 
  },


  clearButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    border: 'none',
    margin: '2rem',
    fontSize: '24px',
    textAlign: 'center',

    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  
   
  },

  
  editIcon: {
   
    color: 'black',
  
  },
   
 

    formControl: {
   
    minWidth: 200,
    boxSizing: 'border-box',
    margin: '2rem', 
    padding: '2rem',
    height: '60px',
    
    backgroundColor: '#fef6e4',
 
  
     
   
  },
    
    
  categories: {
  
    boxSizing: 'border-box',
    fontSize: '25px',
    textAlign: 'center',
    height: '80px',
    color: '#f582ae',
      
  },

  selectCategory: {
 
    color: '#f582ae !important',
    backgroundColor: '#232946',
  },

   
  chip: {
    margin: '1rem',
    float: 'left',
    background: "#f582ae",
  }

});

export default styles;