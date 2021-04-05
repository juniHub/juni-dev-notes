import { fade } from '@material-ui/core/styles';

const drawerWidth = 300;

const appStyle = ( theme ) => ( {
  root: {
    display: 'flex',
  
   
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      backgroundColor: '#232946',
      
    },
   
   
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: '#232946',
    

         
    },
  },

  toolBar: {
     backgroundColor: '#232946',
    
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color: '#f582ae',
    
  },
 
  
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#232946',
    
  },
  content: {
    flexGrow: 1,
  
  },

  brandTitle: {
    width: '100%',
   
  },

  linkLink:{
    textDecoration: 'none',
    color: '#fffffe',
    '&:hover': {
    
      textDecoration: 'none',
      color: '#8bd3dd',
    },

  },

  info:{
    textAlign: 'center',
    margin: '2rem',
    marginTop: '6rem',
    padding: '2rem',
    fontSize: "30px"
 
  },

  createButton: {

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    border: 'none',
    marginRight: '1rem',
   
    textAlign: 'center',

    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    
  }

} );

export default appStyle;
