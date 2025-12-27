
import { useEffect, useState } from 'react';
import './App.css'
import axios  from 'axios';
import Home from './Home';
function App() {

// let[data, setData] = useState([])

// let getData=async()=>{
//   try{
//     // let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     // let dataList = await res.json();
//     // setData(dataList)

//     // let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     // setData(res.data);
    


//     // let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
//     // console.log(res.data);


//     // let res= await axios.post("https://jsonplaceholder.typicode.com/posts", {title: "hii title",age:20})
//     // console.log(res.data);
//     // post request store the data


//     // let res = await axios.put("https://jsonplaceholder.typicode.com/posts/3",{title:"this is title",age:20})
//     // console.log(res.data);
    
//     // let res = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
//     // console.log(res.data);
    

//     // let res= axios.get();
//     // console.log(res);//Promise {<pending>}
    
//   }catch(error){
//     console.log("error",error);
//   }
// }
// useEffect(()=>{
//   getData();
// },[])

// console.log(data);
  return (
    <div>
      <h1 className='bg-blue-100'>Heading</h1>

      <ul>
        {
          data.map((obj)=>(
            <li key={obj.id}>{obj.title}</li>
          ))
        }
      </ul>
      <Home />
      
    </div>
  )
}

export default App



// axios is a libray which 