import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<string[]>()

  useEffect(()=>{
    const func= async()=>{
      try{
      const resp=await fetch('https://fedskillstest.coalitiontechnologies.workers.dev',{
       headers:{
        'Authorization':'Basic '+btoa('coalition:skills-test'),
        'Content-Type':'application/json'
       }
      })
      const data=await resp.json();
      setCount(data);
    }catch(err){
      console.log(err);
    }
    }
    func();
  },[])

  return (
    <>
     <div className='text-red-500'>Hello World</div>
     <div>{count?.map((item:any, index:number)=>(
      <div key={index}>{item.name}</div>
     ))}</div>
     
    </>
  )
}

export default App
