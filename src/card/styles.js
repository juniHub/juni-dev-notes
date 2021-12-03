
const styles = theme => ({
  
  root: {
    background: '#232946',
    color: '#fffffe',
    flexGrow: 1,
    padding: "1rem",
    paddingTop: "2rem",
  },

  card: {
    background: '#fef6e4',
    overflow: 'auto',
    boxShadow: '0px 10px 10px 0px rgba(0,0,0,0.16)',
   
  },

  cardContent: {
    width: '100%',
    height: '100%',
    border: '2px dashed pink'
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
    borderRadius:'35px',
   
    border: 'dashed 3px #f582ae',
    '&:focus': {
      outline: 'none'
    }
  },
 
  newNoteSubmitBtn: {
    width: '100%',
    fontWeight: '900',
    margin: '0.5rem',
    padding: '0.5rem',
    backgroundColor: '#f582ae',
    borderRadius: '35px',
    color: '#001858',
    height: '80px',
    minWidth: '300px',
   
    '&:hover': {
      backgroundColor: '#8bd3dd',
     
    },
     
    
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
    borderRadius: '35px',
    border: 'dashed 3px #f582ae',
    '&:focus': {
      outline: 'none'
    },
    backgroundColor: '#fff'
   
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
   
   
  chip: {
    margin: '1rem',
    float: 'left',
    background: "#f582ae",
  }


});

export default styles;