const styles = theme => ( {
 

  listItem: {

    display: "flex",
    flexDirection: "column",
  
    alignItems: 'start',
    justifyContent: 'space-evenly',
    cursor: 'pointer',
  
    background: '#fef6e4',
    maxWidth: '95%',
   
    margin: '0.5rem',
     
    borderRadius: '5px',
    padding: '1.5rem',
       
    '&:hover': {
     background: '#001858',
     color: '#f582ae',
    },
      
   
   
   
  },

  textSection: {
    width: '100%',
    height :'100%',
 
 
  },  

  deleteIcon: {

    display: "inline-block",
    marginTop: '3rem',
    color :'#fffffe',
  
  
  },

 

});

export default styles;