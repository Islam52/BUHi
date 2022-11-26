import React from "react";
import classes from './CreateInput.module.css'

const CreateInput = React.forwardRef((props, ref) =>{
    return(
        <input ref={ref} className={classes.CreateInput} {...props}/>
    )
})

export default CreateInput;