
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  //  useEffect(()=>{ //2part one is callback function and another is dependancy
  //   first //efected code

  //   return()=>{
  //     second // when you change anything in ui it is executed

  //   }
  // }, [third])// it depend on the "first" part


  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

// cases of useEffect()
  // useEffect(()=>{
  //   console.log("it is execute at every render");
    
  // })



  // useEffect(()=>{
  //   console.log("it is execute at first render");
    
  // },[])


  // useEffect(()=>{
  //   console.log("count updated");//when the value updated
  //   return()=>{
  //     console.log("count unmounted"); // when the variable removed and when the user given (default value) updated
      
  //   }
  // })



  useEffect(()=>{
    console.log("depend on dependancy");
    
  },[total,count])


  const[data,setData] = useState([])

  useEffect(()=>{
    async function getData() {
      try{
        let res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let dataList = await res.json();
        setData(dataList)
      }
      catch(error){
        console.log("error",error);
        
      }
    }
    getData()
  },[])

  return (
    <div>
      hello
      <br />
      <button onClick={()=>setCount(count + 1)}
        className='h-20 w-20 bg-red-300'
        >Count {count}
        </button>

        <br />
        <button onClick={()=>setTotal(total + 1)}
        className='h-20 w-20 bg-red-300 mt-10'
        >Total {total}
        </button>

        <br />

      <ul>
        {
          data.map((obj)=>(
            <li key={obj.id}>{obj.title}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
