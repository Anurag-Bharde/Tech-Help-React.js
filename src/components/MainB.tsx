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
        <div id='mainbb' className='grid grid-rows-7'>
            <div className='row-span-1 bg-slate-400'>
                <div>
                    <div className='text-2xl font-bold pt-3 pl-3'>Diagnosis History</div>
                </div>
            </div>
            <div className='row-span-3 flex gap-x-4'>
                <canvas id="acquisitions"></canvas>
                <div>
                    <div>
                        <div>Systolic</div>
                        <div>{selectedPatient?.diagnosis_history[0].blood_pressure.systolic.value}</div>
                        <div>{selectedPatient?.diagnosis_history[0].blood_pressure.systolic.levels }</div>
                        
                    </div>
                    <div>
                        <div>Diastolic</div>
                        <div>{selectedPatient?.diagnosis_history[0].blood_pressure.diastolic.value}</div>
                        <div>{selectedPatient?.diagnosis_history[0].blood_pressure.diastolic.levels}</div>
                        
                    </div>
                </div>

            </div>
            <div className='row-span-3'>
             <div className='grid grid-cols-3 gap-2'>
                <div className='col-span-1'>
                    <div>
                        <div>
                            <img src={img1} alt='Respiratory' />
                        </div>
                        <div>Respiratory Rate</div>
                        <div>{selectedPatient?.diagnosis_history[0].respiratory_rate.value}</div>
                        <div>{selectedPatient?.diagnosis_history[0].respiratory_rate.levels}</div>
                    </div>
                </div>
                <div className='col-span-1'>
                <div>
                        <div>
                            <img src={img2} alt='Temprature' />
                        </div>
                        <div>Temperature</div>
                        <div>{selectedPatient?.diagnosis_history[0].temperature.value}</div>
                        <div>{selectedPatient?.diagnosis_history[0].temperature.levels}</div>
                    </div>
                </div>
                <div className='col-span-1'>
                <div>
                        <div>
                            <img src={img3} alt='heartBPM' />
                        </div>
                        <div>Heart Rate</div>
                        <div>{selectedPatient?.diagnosis_history[0].heart_rate.value}</div>
                        <div>{selectedPatient?.diagnosis_history[0].heart_rate.levels}</div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default MainB;