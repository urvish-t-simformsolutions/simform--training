 import React from 'react'
 import classes from './DrawToggle.css'

 const DrawerToggle =(props)=>(
     <div onClick={props.clicked} className={classes.DrawerToggle}>
         <div></div>
         <div></div>
         <div></div>
     </div>
 );

 export default DrawerToggle