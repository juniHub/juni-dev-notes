import { fade } from '@material-ui/core/styles';

const styles = theme => ({
  
  cardRoot: {

    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: '0',
    paddingTop: '4rem',
    paddingBottom: '4rem',
    minHeight: '100vh',
    background: '#232946',
    color: '#fffffe',
    overflow: 'auto',
    
  
    
       
  },

  cardContainer: {

    display: 'flex',
    flexWrap: 'wrap',
    
    justifyContent: 'space-around',
    overflow: 'auto',

  },

  cardContent: {
  
    minWidth: "250px",
    width: '60%',
    margin: '0.5rem',
    padding: '0.5rem',
  
    
  },

  cardBody: {
    border: 'dashed 2px #8bd3dd',
    minHeight: '200px',
    background: '#fef6e4',
    width: '100%',
  },
 

  sidebarContainer: {
    margin: '0px',
    width: '300px',
    height: '100%',
    boxSizing: 'border-box',
    float: 'left',
    overflowY: 'scroll',
    overflowX: 'hidden',
    background: '#232946',
       
  },

  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2rem auto',
    
    flexDirection: 'row',
     '@media (max-width: 780px)' : {
    flexDirection: 'column'
  }
  },

  newNoteInput: {
    width: '100%',
    margin: '0.5rem',
    padding: '0.5rem',
    height: '80px',
    outline: 'none',
    minWidth: '300px',
  
    border: 'dashed 3px #f582ae',
    '&:focus': {
      outline: '5px solid #f582ae'
    }
  },
 
  newNoteSubmitBtn: {
    width: '100%',
    fontWeight: '900',
    margin: '0.5rem',
    padding: '0.5rem',
    backgroundColor: '#f582ae',
    borderRadius: '20px',
    color: '#001858',
    height: '80px',
    minWidth: '300px',
   
    '&:hover': {
      backgroundColor: '#8bd3dd',
     
    },
     
    
  },
    
  search: {

    minWidth: '300px',
    border: '3px solid #eebbc3',
    position: 'relative',
    
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: '0.5rem',
    width: '90%',
    
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
   
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  
  },
  inputRoot: {
    color: '#fffffe',
  },
  inputInput: {
    padding: theme.spacing( 1, 1, 1, 0 ),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${ theme.spacing( 4 ) }px)`,
    transition: theme.transitions.create( 'width' ),
    width: '100%',
    [ theme.breakpoints.up( 'sm' ) ]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
    height: '45px',
  
  },

  sendIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',

  },

  
  formControl: {
    width: '100%',
    margin: '0.5rem',
    padding: '0.5rem',
    height: '80px',
    outline: 'none',
    minWidth: '300px',
  
  
    background: '#fef6e4',
  
    border: 'dashed 3px #f582ae',
    '&:focus': {
      outline: '5px solid #f582ae'
    }
   
  },
    
    
  categories: {
  
    
    fontSize: '25px',
    textAlign: 'center',
    width: '95%',
    height: '80px',
    color: '#f582ae',
  
   
      
  },

  selectCategory: {
 
    color: '#f582ae !important',
    background: '#232946',
  },


   heading: {
    padding: '1rem',
    color: '#232946 !important',
  },
   
   



});

export default styles;