import { fade } from '@material-ui/core/styles';

const styles = theme => ({
  
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
    
  search: {
    border: '3px solid #eebbc3',
    position: 'relative',
    
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



});

export default styles;