import classes from "./MiniColumn.module.scss"
import { useState } from "react";
import ReactApexCharts from "react-apexcharts";

function MiniColumn() {
    // eslint-disable-next-line no-unused-vars
    const [data, setDtata] = useState({

       
        series: [{
            name: 'Milliy talabnomalar',
            data: [94, 102, 144, 149, 181, 140]
          }, {
            name: 'Xalqaro talabnomalar',
            data: [59, 64, 61, 70, 197, 140]
          }, {
            name: 'PCT talabnomalari',
            data: [58, 63, 60, 69, 184, 138]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                dataLabels: {
                    position: 'top', // top, center, bottom
                  },
              },
              
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                  return val;
                },
                offsetY: -25,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
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
            fill: {
              opacity: 1,
              colors:['#007bff', '#6610f2','#e83e8c'],
            },
            legend: {
                position: 'bottom',
                fontSize:"16",
            },
            tooltip: {
              y: {
                title: {
                    formatter: (seriesName) => seriesName,
                },

              }
            }
          },


    });


    return (
        <div className={classes.chart} id="chart">
            <h3 className={classes.title} >Регистрация заявок на изобретения по годами</h3>
            <ReactApexCharts options={data.options} series={data.series} type="bar" height={350} />
        </div>
    )
}


export default MiniColumn