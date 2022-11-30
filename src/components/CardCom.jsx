import React, {useEffect, useState} from 'react';
import {Avatar, Box, Card, CardContent, CardHeader, Typography} from '@mui/material';
import { useAppState } from '../state/appState';
import {TrendingDown, TrendingUp} from "@mui/icons-material";
import {Colors} from "../styles/colors";
import Chart from 'react-apexcharts'
import {ApexChat} from '../ApexChat'

function CardCom(props) {
    const {state} = useAppState()
    const [chartOptions,setChartOptions] = useState(
        ApexChat(props.data,props.bg,state.theme)
    )
    useEffect(()=>{
        setChartOptions(ApexChat(props.data,props.bg,state.theme))
    },[state.theme])
    return (
        <Card raised sx={{ maxHeight: 300, borderRadius: '2px', m: 1 }}>
            <CardHeader
                avatar={<Avatar src={`images/${props.avatar}`} />}
                title={<Typography variant="h6">{props.title}</Typography>}
                subheader={
                    <Box display='flex' justifyContent='space-between'>
                        {props.subheader}
                        <Box display='flex' alignItems='center'>
                            <Typography variant='subtitle'>
                                {props.trend}
                            </Typography>
                            {
                                props.trendDirection === 'down' ?
                                    <TrendingDown sx={{ml: 1,color:Colors.danger}} /> :
                                    <TrendingUp sx={{ml: 1,color:Colors.success}}/>

                            }
                        </Box>
                    </Box>
                }
            />
            <CardContent sx={{
                p:0,
                '&.MuiCardContent-root':{
                    paddingBottom: 0
                }
            }}>
                <Chart
                    height='200px'
                    type='line'
                    options={chartOptions.options}
                    series={chartOptions.options.series}
                />



            </CardContent>

        </Card>
    );
}

export default CardCom;