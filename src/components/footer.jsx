import React from 'react'
const currentDate= new Date().getFullYear();

function footer(){
    return (<footer> <p>Copyright  Ⓒ {currentDate}  </p></footer>);
}

export default footer;