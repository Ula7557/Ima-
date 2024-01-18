import { useState } from "react";
import ReactApexCharts from "react-apexcharts";
import classes from "./BigColumn.module.scss";


function BigColumn() {

    // eslint-disable-next-line no-unused-vars
    const [data, setDtata] = useState({

       
        series: [{
            name: `Mazmuni bo'yicha ekspertiza`,
            data: [443, 452, 455, 643, 808, 510]
        }, {
            name: 'Formal ekspertiza',
            data: [513, 470, 558, 528, 511, 436]    
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            xaxis: {
                type: 'datetime',
                categories: ['2015 GMT', '2016 GMT', '2017 GMT', '2018 GMT',
                    '2019 GMT', '2020 GMT'
                ],
            },
            yaxis: {
                title: {
                  text: 'Soni',
                  style: {
                      fontSize: '16px',
                      fontWeight: 400,
                      cssClass: 'apexcharts-yaxis-label',
                  },
                },
                
              },
            legend: {
                position: 'bottom',
                fontSize:"16",
            },
            fill: {
                colors:['rgb(0, 227, 150)', 'rgb(0, 143, 251)'],
            }
        },


    });


    return (
        <div className={classes.chart} id="chart">
            <h3 className={classes.title} >Экспертиза заявок на изобретения по годам</h3>
            <ReactApexCharts options={data.options} series={data.series} type="bar" height={350} />
        </div>
    )
}

export default BigColumn