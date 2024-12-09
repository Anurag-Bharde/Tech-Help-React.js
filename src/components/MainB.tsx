import { useEffect,useRef } from 'react';
import './Styles/MainB.css';
import Chart from 'chart.js/auto';
import { usePatient } from './Context/DataCont';
import img1 from '../Images/heart.svg'
import img2 from '../Images/temperature.svg'
import img3 from '../Images/HeartBPM.svg'

function MainB() {
    const chartRef = useRef<Chart | null>(null);
    const {selectedPatient}=usePatient();

    useEffect(() => {
        if (!selectedPatient) return;
        const data = selectedPatient?.diagnosis_history.map((item)=>({
            Months: item.month, 
            BloodPresure: item.blood_pressure.systolic.value,
            Diastolic: item.blood_pressure.diastolic.value
        }));

        const ctx = document.getElementById('acquisitions') as HTMLCanvasElement;

        if (chartRef.current) {
            chartRef.current.destroy();
        }
        if (ctx) {
            chartRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(row => row.Months),
                    datasets: [{
                        label: 'Blood Pressure (Systolic)',
                        data: data.map(row => row.BloodPresure),
                        borderColor: 'rgb(194, 110, 180)',
                        tension: 0.1
                    },{
                        label: 'Blood Pressure (Diastolic)',
                        data: data.map(row => row.Diastolic),
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    }
                ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: false
                        }
                    }
                }
            });
            
        }
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [selectedPatient]); // Run once on component mount

    return (
        <div id='mainbb' className='grid grid-rows-9'>
            <div className='row-span-1 h-[50px]'>
                <div>
                    <div className='text-2xl font-bold pt-3 pl-3 h-[50px]'>Diagnosis History</div>
                </div>
            </div>
            <div className='row-span-4 flex gap-x-4 bg-[#F4F0FE] ml-4 mr-4 rounded-lg '>
                <canvas id="acquisitions"></canvas>
                <div>
                    <div>
                        <div className='flex items-center gap-x-2'><div className='h-[13px] w-[13px] bg-[#E66FD2] rounded-full'></div> Systolic</div>
                        <div className='text-xl font-bold'>{selectedPatient?.diagnosis_history[0].blood_pressure.systolic.value}</div>
                        <div className='text-sm'>{selectedPatient?.diagnosis_history[0].blood_pressure.systolic.levels }</div>
                        
                    </div>
                    <div className='mt-3 h-[1px] w-full bg-slate-300'></div>
                    <div>
                        <div className='flex items-center gap-x-2'><div className='h-[13px] w-[13px] bg-[#8C6FE6] rounded-full'></div> Diastolic</div>
                        <div className='text-xl font-bold'>{selectedPatient?.diagnosis_history[0].blood_pressure.diastolic.value}</div>
                        <div className='text-sm'>{selectedPatient?.diagnosis_history[0].blood_pressure.diastolic.levels}</div>
                        
                    </div>
                </div>

            </div>
            <div className='row-span-4 mt-3'>
             <div className='grid grid-cols-3 gap-5 pl-5 pr-2'>
                <div className='col-span-1 bg-[#E0F3FA] rounded-lg pb-4 w-[200px]'>
                    <div >
                        <div className='pl-4 pt-3 h-[90px]'>
                            <img className='h-[80px]' src={img1} alt='Respiratory' />
                        </div>
                        <div className='text-md font-normal pl-4'>Respiratory Rate</div>
                        <div className='pl-4 text-xl font-bold'>{selectedPatient?.diagnosis_history[0].respiratory_rate.value} BPM</div>
                        <div className='pl-4'>{selectedPatient?.diagnosis_history[0].respiratory_rate.levels}</div>
                    </div>
                </div>
                <div className='col-span-1 bg-[#FFE6E9] rounded-lg pb-4 w-[200px]'>
                <div>
                        <div className='pl-4 pt-3 h-[90px]'>
                            <img className='h-[80px]' src={img2} alt='Temprature' />
                        </div>
                        <div className='text-md font-normal pl-4'>Temperature</div>
                        <div className='pl-4 text-xl font-bold'>{selectedPatient?.diagnosis_history[0].temperature.value}°C</div>
                        <div className='pl-4'>{selectedPatient?.diagnosis_history[0].temperature.levels}</div>
                    </div>
                </div>
                <div className='col-span-1 bg-[#FFE6F1] rounded-lg pb-4 w-[200px]   '>
                <div>
                        <div className='pl-4 pt-3 h-[90px]'>
                            <img className='h-[80px]' src={img3} alt='heartBPM' />
                        </div>
                        <div className='text-md font-normal pl-4'>Heart Rate</div>
                        <div className='pl-4 text-xl font-bold'>{selectedPatient?.diagnosis_history[0].heart_rate.value} BPM</div>
                        <div className='pl-4'>{selectedPatient?.diagnosis_history[0].heart_rate.levels}</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MainB;