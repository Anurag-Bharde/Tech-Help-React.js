import './Styles/SideLow.css'
import { usePatient } from './Context/DataCont'
import imgg from '../Images/download.svg'

const SideLow = () => {
    const {selectedPatient}=usePatient();


    return <div id='sidelow'>
        <div>
            <div>Lab Results</div>
        </div>
        <div>
            {selectedPatient?.lab_results.map((items,index)=>(
                <div key={index} className='flex justify-between'>
                    <div>{items}</div>
                    <img src={imgg} alt='downloads' />
                </div>
            ))}
        </div>
    </div>
}

export default SideLow