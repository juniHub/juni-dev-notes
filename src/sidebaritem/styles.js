const styles = theme => ( {
 

  listItem: {
    cursor: 'pointer',
  
    background: '#fef6e4',
    maxWidth: '95%',
    
    margin: '0.5rem',
 
    display: 'flex',
    alignItems: 'center',
    
    borderRadius: '40px',
    padding: '1.5rem',
   
 
    
    '&:hover': {
     background: '#001858',
     color: '#f582ae',
    },
      
   
   
   
  },

  textSection: {
    maxWidth: '100%',
 
 
  },  

  deleteIcon: {
    position: 'absolute',
    right: '20px',
    top: 'calc(50% - 15px)',

    
  },

 

});

export default styles;