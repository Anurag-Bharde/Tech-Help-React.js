
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { Patient } from "../../Type/types"
type DataContext={
    selectedPatient:Patient | null;
    setSelectedPatient:(patient:Patient)=>void;
}

const DataContt=createContext<DataContext | undefined>(undefined);

export function DataProvider({children, initialPatients}:{children:ReactNode,initialPatients:Patient[]}){
const [selectedPatient,setSelectedPatient] = useState<Patient | null>(null);

useEffect(()=>{
    if(selectedPatient===null && initialPatients.length>0){
        setSelectedPatient(initialPatients[0]);
    }
},[initialPatients])

return(
    <DataContt.Provider value={{selectedPatient,setSelectedPatient}}>
        {children}
    </DataContt.Provider>
)
}

export function usePatient(){
    const context=useContext(DataContt);
        if (context===undefined){
        throw new Error('usePatient must be used')
    }
    return context;
}