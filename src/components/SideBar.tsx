import '../components/Styles/Sidebar.css'
import { Patient } from '../Type/types'
import side from '../Images/SideSearch.svg'
const SideBar = ({counts}:{counts:Patient[]}) => {
    return <div>
        <div id="SideBar" className='pt-2'>
            <div className='flex justify-around items-center pb-5'>
                <div className='font-bold text-2xl'>Patients</div>
                <div><input  type="text"  placeholder="Search..." 
                className=" bg-black bg-opacity-60 w-44 rounded-full pl-4 text-white text-opacity-100"
                /></div>
            </div>

            <div >
    <div className='relative px-4' style={{height:'600px'}}> {/* Added h-full */}
        <div className='overflow-y-auto h-[] '> {/* Changed to use percentage */}
            {counts.map((items) => {
                return <div className='h-10 w-full px-4'> 
                    <div className='truncate'>{items.name}</div>
                </div>
            })}
        </div>
    </div>
</div>
        </div>
    </div>
}

export default SideBar;