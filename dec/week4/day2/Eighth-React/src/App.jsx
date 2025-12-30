import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { use } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // effect code what you want to execute
  //   // return () => { //*it is executed when your variable is unmounted
  //   // second
  //   }
  // },[third]) //dependency array //*the effect will be executed when the variable in the dependency array is changed

  // execute at all rendeings
  // useEffect(() => {
  //   alert("rendered")
  // })

  // execute at first rendering
  // useEffect(() => {
  //   alert("it is execute at the first rendering")
  // }, [])

  // return statement in useEffect
  // useEffect(() => {
  //   alert("Data updated")

  //   return () => {
  //     alert("Data unmounted")
  //   }
  // })
  // based on dependency 
  // useEffect(() => {
  //   alert("based on dependency updated")

  // }, [count, total])

  useEffect(() => {
    async function getData() {
      console.log("Data fetched")
      try {
        // fetch data from api
        let res= await fetch("https://jsonplaceholder.typicode.com/posts");
        let Totaldata = await res.json();
        setData(Totaldata);
      } catch (error) {
        console.log("error while fetching data", error)
      }
    }
    getData()
  },[])

  console.log(data)
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
    {/* <div className="h-10 w-20 bg-blue-500 rounded flex justify-center items-center">
    <button onClick={() => setCount(count + 1)}
        className='border p-2 rounded'>
      click {count}
      </button>
      <button onClick={() => setTotal(total + 1)}
        className='border p-2 rounded'>
        Total {total}
      </button>
    </div> */}
    </div>
  )
}

export default App