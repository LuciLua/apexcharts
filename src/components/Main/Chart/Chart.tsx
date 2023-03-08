'use client'

import { Suspense, useEffect, useState } from "react";
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function ChartComponent() {

    const options: ApexCharts.ApexOptions = {
        series: [
            {
                name: "2022",
                data: [28, 33, 26, 18, 22, 30, 10]
            },
            {
                name: "2023",
                data: [40, 21, 40, 14, 18, 37, 43]
            }
        ],
        labels: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho'],
        colors: ['#12d2ff', '#1212f3'],
        theme: {
            monochrome: {
                enabled: true,
                color: '#dd0a0d',
                shadeTo: 'light',
            },
        }
    }

    return (
        <>
            <Suspense fallback={<p>Loading......</p>}>
                <Chart
                    options={options}
                    series={options.series}
                    height={400}
                    width={500}
                    type="line" />
            </Suspense>
        </>
    )
}


export default ChartComponent