import { fade } from '@material-ui/core/styles';

const styles = theme => ( {
  
   alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  
  sidebarContainer: {
    margin: '0px',
    width: '300px',
    height: '100%',
    boxSizing: 'border-box',
    float: 'left',
    overflowY: 'scroll',
    overflowX: 'hidden',
    background: '#fef6e4',
       
  },

  newNoteInput: {
    width: '94%',
    margin: '0.5rem',
    marginTop: '2rem',
    padding: '0.5rem',
    height: '60px',
    outline: 'none',
  
    border: 'dashed 3px #f582ae',
    '&:focus': {
      outline: '5px solid #f582ae'
    }
  },
 
  newNoteSubmitBtn: {
    width: '94%',
    fontWeight: '900',
    margin: '0.5rem',
    padding: '0.5rem',
    backgroundColor: '#f582ae',
    borderRadius: '20px',
    color: '#001858',
    height: '60px',
   
    '&:hover': {
      backgroundColor: '#8bd3dd',
      borderRadius: '20px',
    },
     
    
  },

  searchArea: {
    
    width: '94%',
    margin: '0.5rem',
    marginTop: '2rem',
    padding: '0.5rem',
    height: '200px',
    outline: 'none',
  
    border: 'dashed 3px #f582ae',
    '&:focus': {
      outline: '5px solid #f582ae'
    }
 
  },
    
  search: {
    border: '3px solid #eebbc3',
    position: 'inline-block',
    
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    margin: '0.5rem',
    width: '94%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
      
    },
   
  },

  inputRoot: {
    color: '#001858',
  },
  inputInput: {
    padding: theme.spacing( 1, 1, 1, 0 ),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${ theme.spacing( 4 ) }px)`,
    transition: theme.transitions.create( 'width' ),
    width: '100%',
    [ theme.breakpoints.up( 'sm' ) ]: {
      width: '18ch',
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

   heading: {
    padding: '1rem',
    color: '#232946 !important',
  },
   



});

export default styles;