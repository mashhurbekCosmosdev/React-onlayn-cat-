import React,{useState,useEffect} from "react";
// import Main from "./Components/Main";
import './Components/style.css'
function App(){
  let [user,setUser] = useState([]);
  const [url,setUrl] = useState("http://127.0.0.1:5500/user.json")

console.log(user);


  useEffect(() =>{
    fetch(url)
    .then((res) => res.json())
    .then((data) => setUser(data))
  },[url])


    return(
      <div>
        <ul>
          {user.map((index) =>{
            return(
              <li key={index.id}>
               <img src={index.url}/>
              </li>
            )
          })
          
          }
        </ul>


          <button onClick={() => setUrl("http://127.0.0.1:5500/user.json?loc=Tortosh")}>Set Api</button>
          <button onClick={() => setUrl("http://127.0.0.1:5500/user.json")}>back Api</button>

      </div>
    )
}
export default App;



<>
      {/* <Main/> */}
      </>

