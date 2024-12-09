
import './Styles/MainLow.css'
import { usePatient } from './Context/DataCont'; 
import { useEffect } from 'react';
import { Table, } from '@mantine/core';

const MainLow = () => {
    const {selectedPatient}= usePatient();
    
const renterTable=()=>{
    return selectedPatient?.diagnostic_list.map((datas,index)=>(
        <Table.Tr key={index} className='mt-2'>
            <Table.Td className='text-sm'>{datas.name}</Table.Td>
            <Table.Td className='text-sm'>{datas.description}</Table.Td>
            <Table.Td className='text-sm pb-4'  >{datas.status}</Table.Td>
        </Table.Tr>
    ))
}


    return <div id='mainlow'>
        <div className='pl-2 pt-2 pr-2'>
            <div className='text-2xl font-semibold'>Diagnostic List</div>
            <div className='h-[220px] overflow-y-auto'>
            <Table>
                <Table.Thead className='sticky top-0 bg-slate-200 rounded-full'>
                    <Table.Tr>
                        <>
                        <Table.Th>Problem/Diagnosis</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Status</Table.Th>
                        </>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody >{renterTable()}
                    </Table.Tbody>
            </Table>
            </div>
        </div>
    </div>
}

export default MainLow  