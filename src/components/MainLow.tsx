
import './Styles/MainLow.css'
import { usePatient } from './Context/DataCont'; 
import { useEffect } from 'react';
import { Table, } from '@mantine/core';

const MainLow = () => {
    const {selectedPatient}= usePatient();
    
const renterTable=()=>{
    return selectedPatient?.diagnostic_list.map((datas,index)=>(
        <Table.Tr key={index}>
            <Table.Td>{datas.name}</Table.Td>
            <Table.Td>{datas.description}</Table.Td>
            <Table.Td>{datas.status}</Table.Td>
        </Table.Tr>
    ))
}


    return <div id='mainlow'>
        <div>
            <div>Diagnostic List</div>
            <div>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <>
                        <Table.Th>Problem/Diagnosis</Table.Th>
                        <Table.Th>Description</Table.Th>
                        <Table.Th>Status</Table.Th>
                        </>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{renterTable()}</Table.Tbody>
            </Table>
            </div>
        </div>
    </div>
}

export default MainLow  