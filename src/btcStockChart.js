import React from 'react';

export function btcStockChart(data,bg,theme) {
    return ({
        options: {
            chart: {
                dropShadow: {
                    enabled: true,
                    color: theme === 'dark' ? bg : '#000',
                    top: 4,
                    left: 4,
                    blur: 10,
                    opacity: 0.5,
                },
                parentHeightOffset: 0,
                id: "basic-line",
                background: theme === 'dark' ? '#222831' : bg,
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                }
            },
            grid: {
                show: true,
            },
            stroke: {
                curve: 'smooth',
                color: theme === 'dark' ? bg : "#fff"
            },
            xaxis: {
                labels: {
                    show: true,
                    style:{
                        colors:['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff']
                    }
                },
                axisBorder: {
                    show: true
                },
                axisTicks: {
                    show: false
                },
                categories: [2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]

            },
            yaxis: {
                labels: {
                    show: true,
                    style:{
                        colors:['#fff','#fff','#fff','#fff','#fff']
                    }

                }
            },

            series: [
                {
                    name: 'series-1',
                    data: data,
                }
            ]
        }
    })
}

