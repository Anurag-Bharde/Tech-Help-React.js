import { useEffect,useRef } from 'react';
import './Styles/MainB.css';
import Chart from 'chart.js/auto';

function MainB() {
    const chartRef = useRef<Chart | null>(null);

    useEffect(() => {
        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ];

        const ctx = document.getElementById('acquisitions') as HTMLCanvasElement;

        if (chartRef.current) {
            chartRef.current.destroy();
        }
        if (ctx) {
            chartRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [{
                        label: 'Acquisitions by year',
                        data: data.map(row => row.count)
                    }]
                }
            });
        }   
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []); // Run once on component mount

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
                        <div>120</div>
                        <div>Higher than Average</div>
                    </div>
                    <div>
                        <div>Diastolic</div>
                        <div>78</div>
                        <div>Lower than Average</div>
                    </div>
                </div>

            </div>
            <div className='row-span-3'>
             <div className='grid grid-cols-3 gap-2'>
                <div className='col-span-1'>
                    <div>
                        <div>Image</div>
                        <div>Respiratory Rate</div>
                        <div>20 bpm</div>
                        <div>Normal</div>
                    </div>
                </div>
                <div className='col-span-1'>dsaf</div>
                <div className='col-span-1'>dsaf</div>
                </div>
            </div>
        </div>
    );
}

export default MainB;