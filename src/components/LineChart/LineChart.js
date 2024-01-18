import classes from "./LineChart.module.scss"
import { useState } from "react";
import ReactApexCharts from "react-apexcharts";

function LineChart({height}) {
    // eslint-disable-next-line no-unused-vars
    const [data, setDtata] = useState({


        series: [
            {
                name: 'Milliy talabnomalar',
                data: [288, 353, 357, 470, 374, 356]
            },
            {
                name: 'Xalqaro talabnomalar',
                data: [219, 202, 196, 180, 169, 232]
            },
            {
                name: 'PCT talabnomalari',
                data: [218, 200, 194, 157, 167, 203]
            }
        ],
        options: {
            chart: {
                height: {height},
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                }
            },
            colors:['#007bff', '#6610f2','#e83e8c'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth'
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: ['2015', '2016', '2017', '2018', '2019', '2020'],
            },
            yaxis: {
                title: {
                    text: 'Soni',
                    style: {
                        colors: [],
                        fontSize: '16px',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                },
            },
            legend: {
                position: 'bottom',
                fontSize:"16",

            }
        },


    });


    return (
        <div className={classes.chart} id="chart">
            <h3 className={classes.title} >Регистрация заявок на изобретения по годами</h3>
            <ReactApexCharts options={data.options} series={data.series} type="line" height={350} />
        </div>
    )
}

export default LineChart