import '../components/Styles/Sidebar.css'
import { Patient } from '../Type/types'
import { usePatient } from './Context/DataCont'
import { useEffect, useState } from 'react'


import side from '../Images/SideSearch.svg'
const SideBar = ({counts}:{counts:Patient[]}) => {

    const {selectedPatient,setSelectedPatient}=usePatient();
    const [search,setSearch]=useState('');
    const [filteredPatients, setFilteredPatients] = useState<Patient[]>(counts);


    useEffect(() => {
        const filtered = counts.filter(patient => 
            patient.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredPatients(filtered);
    }, [search, counts]);

    return <div>
        <div id="SideBar" className='pt-2'>
            <div className='flex justify-around items-center pb-5'>
                <div className='font-bold text-2xl'>Patients</div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="bg-black bg-opacity-60 w-44 rounded-full pl-4 text-white text-opacity-100"
                    />
                </div>
            </div>

            <div >
    <div className='relative px-4' style={{height: 'calc(760px - 80px)'}}> {/* Added h-full */}
        <div className='overflow-y-auto h-full'> {/* Changed to use percentage */}
        {filteredPatients.map((items) => (
                        <div key={items.name} className='h-[60px] w-full px-4'> 
                            <div 
                                className='h-full w-full px-4 cursor-pointer hover:bg-[#D8FCF7] rounded-xl'
                                onClick={() => setSelectedPatient(items)}
                            > 
                            <div className='flex gap-2 justify-between items-center '>
                                <div className='truncate'>
                                <div className="grid grid-rows-4 gap-x-2 grid-flow-col pt-[5px]">
                    <div className="row-span-4 col-span-1 h-12 w-12 flex justify-center items-center" ><img src={items.profile_picture} alt="Profile pics" /></div>
                    <div className="row-span-2  col-span-2 text-base font-bold">{items.name}</div>
                    <div className="row-span-2 col-span-2 text-sm text-[#707070]">{items.gender} {items.age}</div>

                </div>
                                </div>
                                <div>...</div>
                                </div>
                            </div>
                        </div>
                    ))}
        </div>
    </div>
</div>
        </div>
    </div>
}

export default SideBar;