import React, {useEffect, useState} from 'react';
import {useAppState} from "../state/appState";
import {btcStockChart} from '../btcStockChart'
import {Colors} from "../styles/colors";
import {Card, CardHeader, Box, Typography, CardContent} from "@mui/material";
import Chart from "react-apexcharts";

function BtcStock(props) {
    const {state} = useAppState()
    const [chartOptions,setChartOptions] = useState(
        btcStockChart(
            [10,60,125,150,129,149,170,199,230,260,259],
            Colors.primary,
            state.theme
        )
    )
    useEffect(()=>{
        setChartOptions(btcStockChart(
            [10,60,125,150,129,149,170,199,230,260,259],
            Colors.primary,
            state.theme
        ))
    },[state.theme])

    return (
        <Card raised>
            <CardHeader
                sx={{p:4}}
                title={
                    <Box display='flex'
                         justifyContent="space-between">
                        <Typography variant='h6'>BTC $160,000</Typography>
                    </Box>
                }
                />
            <CardContent sx={{
                p:0,
                '&.MuiCardContent-root':{
                    paddingBottom:0,
                }
            }} />
            <Chart
                options={chartOptions.options}
                series={chartOptions.options.series}
                type='line'
                height={420}
            />
        </Card>
    );
}

export default BtcStock;