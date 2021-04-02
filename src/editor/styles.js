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
    backgroundColor: '#232946',
    color: 'white',
   
      
  },

  titleHeading: {
  
    boxSizing: 'border-box',
    border: 'none',
    margin: '0',
    padding: '2.6rem',
    height: '60px',
    width: '100%',
    backgroundColor: '#f582ae',
    color: 'black',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
     
  },

  heading: {
    padding: '1rem',
    color: '#232946 !important',
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
   
  
  noteContent:{

    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem',
    


  },

    formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
    boxSizing: 'border-box',
    border: 'none',
    
    padding: '2.6rem',
    height: '60px',
    width: '100%',
    backgroundColor: '#f582ae',
   
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
  },
    
    
  categories: {
  
    boxSizing: 'border-box',
    marginLeft: '20px',
    fontSize: '25px',
    textAlign: 'center',
    width: '60%',
    height: '60px',
    color: '#232946 !important',
    borderBottom: 'solid 2px #232946',
   
      
  },

  selectCategory: {
    backgroundColor:'#232946 !important',
  }

});

export default styles;