import React, {useState, useEffect} from "react";
import axios from 'axios';

export function NextComponent(){
    const [ title,setTitle] = useState("")
    const [ author,setAuthor] = useState("")
    const [ date,setDate] = useState("")
    useEffect( () => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(pic =>{ const title = pic.data.title
        const author = pic.data.copyright
        const date =pic.data.date
        setTitle(title)
        setAuthor(author)
        setDate(date)
    })
    },[])
    return (<div>
    <h1>{title}</h1>
    <p>{author}</p>
    <p>{date}</p>
    
    </div>
    )
    
    
    }