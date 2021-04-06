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
    

  },


  titleInput: {
  
    boxSizing: 'border-box',
    border: '3px solid #f582ae',
    fontSize: '25px',
    textAlign: 'center',
    width: '100%',
    height: '60px',
    marginLeft: '20px',
    backgroundColor: '#fef6e4',
    color: '#001858',
   
      
  },

  titleHeading: {
  
    boxSizing: 'border-box',
    border: 'none',
    margin: '0',
    padding: '2.6rem',
    height: '60px',
    width: '100%',
   
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
     
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
    border: 'dashed 1px #f582ae'
    


  },


  clearButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    border: 'none',
    marginTop: '2rem',
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
    margin: theme.spacing(1),
    minWidth: 200,
    boxSizing: 'border-box',
    border: 'none',
    
    padding: '2.6rem',
    height: '60px',
    width: '100%',
    backgroundColor: '#fef6e4',
   
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
    
    
  categories: {
  
    boxSizing: 'border-box',
    fontSize: '25px',
    textAlign: 'center',
    width: '95%',
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