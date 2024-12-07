import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Patient} from './Type/types'
import './App.css'
import Notification from './components/Notification'
import SideBar from './components/SideBar'
import MainB from './components/MainB'
import MainLow from './components/MainLow'
import SideTop from './components/SideTop'
import SideLow from './components/SideLow'
import {DataProvider} from './components/Context/DataCont'
import { createTheme, MantineProvider } from '@mantine/core';




function App() {
  const [count, setCount] = useState<Patient[]>([])

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
    <MantineProvider >
    <DataProvider initialPatients={count}>
    <div className='bg-[#06F7F8] h-full'>
    <div className='pt-2 px-2'><Notification /></div>
    <div className='flex'>
     <div className=' p-4'><SideBar counts={count ||[]}  /></div>
     <div >
      <div><MainB /></div>
     <div><MainLow /></div>
     </div>
     <div>
     <div><SideTop /></div>
     <div><SideLow /></div>
     </div>
     </div>
    </div>
    </DataProvider>
    </MantineProvider>
  )
}

export default App
