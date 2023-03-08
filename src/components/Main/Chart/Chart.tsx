'use client'

import { Suspense } from "react";
// import dynamic from 'next/dynamic';
import Chart from "react-apexcharts";

function ChartComponent() {

    // const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


    const options: ApexCharts.ApexOptions = {
        series: [
            {
                name: "2022",
                data: [28, 29, 33, 26, 18, 22]
            },
            {
                name: "2023",
                data: [40, 21, 14, 18, 37, 43]
            }
        ],
        labels: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho'],
        colors: ['#12d2ff', '#1212f3'],
        theme: {
            monochrome: {
                enabled: true,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            }
        }
    }

    return (
        <>
            <Suspense fallback={<p>Loading......</p>}>
                <Chart
                    options={options}
                    series={options.series}
                    width='500'
                    type="line" />
            </Suspense>
        </>
    )
}


export default ChartComponent