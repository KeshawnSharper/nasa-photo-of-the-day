import React, {useState, useEffect} from "react";
import axios from 'axios';

export function Background(props){
const [ picture,setPicture] = useState("")
const { url } = props 
useEffect( () => {
    axios.get(url)
.then(pic =>{ 
    console.log(pic)
    const pict = pic.data.hdurl
setPicture(pict)
})
},[])
return <img src={picture}/>
}