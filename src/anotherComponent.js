import React, {useState, useEffect} from "react";
import axios from 'axios';

export function Desc(){
const [ exp,setExp] = useState("")
useEffect( () => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
.then(pic =>{ 
    console.log(pic)
    const pict = pic.data.explanation
setExp(pict)
})
},[])
return (
<div>
    <p>{exp}</p>
</div>
)
}