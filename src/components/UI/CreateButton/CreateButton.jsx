import React from "react";
import classes from './CreateButton.module.css'

const CreateButton = ({children, ...props}) =>{
    return(
        <button {...props} className={classes.CreateBtn}>
            {children}
        </button>
    )
}

export default CreateButton;