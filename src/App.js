import React from "react";
import "./App.css";
import { Background } from "./background"
import { NextComponent } from "./nextCompoent"
import { Desc } from "./anotherComponent"

function App() {
 /* axios
.get("https://api.nasa.gov/api.html#apod")
// Which we then set to state
.then(res => setDogPic(res.data.message))

// Always include error handling
.catch(err => console.log(err));

*/
let url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14"


  return (
    <div className="App">
      <NextComponent />
      <Background url= {url} />
      <Desc />
    </div>
  );
}




export default App;
