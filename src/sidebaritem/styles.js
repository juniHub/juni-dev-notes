const styles = theme => ({
  listItem: {
    cursor: 'pointer',
    color: '#f582ae',
  
      '&:hover': {
     opacity: '0.8',
    },
      
    background: '#fef6e4',
    maxWidth: '95%',
    
    margin: '0.5rem',
    padding: '0.5rem',
   
  },

  textSection: {
    maxWidth: '85%',
    
  
   
  },  

  deleteIcon: {
    position: 'absolute',
    right: '5px',
    top: 'calc(50% - 15px)',
    '&:hover': {
      color: '#8bd3dd'
    }
  },

 

});

export default styles;