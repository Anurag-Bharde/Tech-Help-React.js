import './Styles/SideLow.css'
import { usePatient } from './Context/DataCont'
import imgg from '../Images/download.svg'

const SideLow = () => {
    const {selectedPatient}=usePatient();


    return <div id='sidelow'>
        <div className='p-2 '>
            <div className='text-2xl font-semibold'>Lab Results</div>
        </div>
        <div className='h-[180px] overflow-y-auto'>
            {selectedPatient?.lab_results.map((items,index)=>(
                <div key={index} className='flex justify-between p-1'>
                    <div className='pl-2'>{items}</div>
                    <img className='pr-2' src={imgg} alt='downloads' />
                </div>
            ))}
        </div>
    </div>
}

export default SideLow