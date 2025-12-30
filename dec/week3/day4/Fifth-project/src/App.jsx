
import { createContext } from 'react'
import './App.css'
import Child from './Child';
import Child3 from './Child3';
import Child2 from './Child2';
let nameContext = createContext();// conetxt object creation(to avoid props concept and by this every child can access it)
let themeContext = createContext();
let funContext = createContext();
let funcContext = createContext();
function App() {
let a=1;

let handle= ()=>{
  a++;
  console.log(a);
  
}
  return (
    <>
      Today we are going to learn the useContext
      {
        /* 
        The steps to create the context object

        => use the createContext method to create the context object 
        => use the context provider in the component(provider means which have the context)
        => add the value
        =>export the context object



        How to access the context object in the other component

        =>use the useContext() hook and pass the context object to get the context data
        */
      }

      <nameContext.Provider value={"Qlith"}>
        <themeContext.Provider value={"red"}>
        <Child/>
        </themeContext.Provider>
      </nameContext.Provider>
      <funContext.Provider value={function a(){return "hello"}}>
      <Child3/>
      </funContext.Provider>
      <funcContext.Provider value={handle}>
        <Child2/>
      </funcContext.Provider>
    </>
  )
}
export {nameContext,themeContext,funContext,funcContext}
export default App
