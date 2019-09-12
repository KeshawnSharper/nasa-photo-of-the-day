import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from '@emotion/styled'

/* img{
  height:50rem;
  width:100%;
  }
*/
const Img = styled.img`
height:50rem;
width:100%;
border-radius:50px;
`;

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
return <Img src={picture}></Img>
}