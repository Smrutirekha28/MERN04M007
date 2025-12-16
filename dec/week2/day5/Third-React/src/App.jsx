
import './App.css'
import Card from './component/Card';
import Home from './Home'
import Home2 from './Home2';

function App() {

  let obj={
    name:"xyz",
    age:99,
    phone:696969
  }
  let handleFun=()=>{
    console.log("this is handle function");  
  }
  return (
    <>
      <h1>Hello</h1>
      <Home 
        a={20} 
        str={"hii"} 
        isTrue={true} 
        arr= {[1,2,3,4]}
        obj={obj}
        func={handleFun}
      />
      {/* dynamic way */}
      <Home2 b={50} obj={obj}>
          <button>Button</button>
          <p>this is paragraph</p>    
          {/* the above button and p tag are the children of home 2 */}
          
      </Home2>
      <div className='flex gap-2 flex-wrap mt-40 ml-10'>
        <Card img={"https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200"} title={"cat image"} desc={"this is a pet cat"}/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </>
  )
}

export default App
