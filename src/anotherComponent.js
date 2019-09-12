import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from '@emotion/styled'


const Explain = styled.div`
margin-left:10rem;
width:70%;
${props => (props.type === 'description' ? `background: lightgrey;` : null)}

`

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
<Explain type="description">
    <p>{exp}</p>
</Explain>
)
}