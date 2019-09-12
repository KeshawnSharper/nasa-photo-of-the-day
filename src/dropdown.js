import React, {useState, useEffect} from "react";
import axios from 'axios';

let URL = ["https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14","https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY","https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-09"]


function dropDown (){
getLink = i => {
return(
<div className="App">
      <NextComponent url={i}/>
      <Background url= {i} />
      <Desc url={i}/>
    </div>

)


} 

function urlItem (){
    return
    URL.forEach((link,index) => <li onClick={getLink(link)}>{link}</li>
}
return (
    <ul> 
        {urlItem}
     </ul>
     )
}