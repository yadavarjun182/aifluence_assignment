import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
const Doughnutchart = () => {

    const chartRef = useRef(null)
    const chartInstance = useRef(null)

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy()
        }
        const mychartRef = chartRef.current.getContext("2d");
        chartInstance.current = new Chart(mychartRef, {
            type: 'doughnut',
            data: {
                labels: [
                    'Male',
                    'Female',
                    'Unknown'
                ],
                datasets: [{
                    data: [29, 38, 33],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
                    ],
                }]
            },

        })
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy()
            }
        }
    }, [])


    return (
        <>
            <div style={{ border: "1px solid red", width: "50%" }}>
                <canvas ref={chartRef}
                // style={{ width: "300px", height: "280px" }}
                />
            </div>
        </>
    )
}

export default Doughnutchart