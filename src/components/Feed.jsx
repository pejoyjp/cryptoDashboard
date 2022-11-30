import { useTheme } from '@emotion/react';
import { Box, styled, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Colors } from '../styles/colors'
import React from 'react';
import { useAppState } from '../state/appState';
import { DrawerHeader, drawerWidth } from './DrawerCom';
import CardCom from './CardCom';
import BtcStock from "./BtcStock";

const openedMixin = (theme) => ({
   marginLeft:drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
      margin: `calc(${theme.spacing(0)} + 1px)`,
    
    [theme.breakpoints.up('sm')]: {
      margin: `calc(${theme.spacing(5)} + 1px)`,
    },
});

const MainContainer = styled(Box)(({ theme, open }) => ({
    marginLeft: drawerWidth,
    whiteSpace: 'nowrap',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper':openedMixin(theme)
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper':openedMixin(theme)
    }),

}))

function Feed(props) {
    const { state } = useAppState()
    const theme = useTheme()
    return (
        <MainContainer component='main' open={state.drawer}>
            <DrawerHeader />
            <Box>
                <Box sx={{
                    background: 'url("./images/bg.jpg")',
                    boxShadow: 'inset 0 0 50px 50px rgba(0,0,0,0.8)',
                    padding: '20px 30px 99px 30px',
                    backgroundPosition: 'right 0px bottom 800px',
                    color:Colors.white
                }}>
                    <Typography
                        sx={{
                            fontSize: '1.5rem',
                            lineHeight: 1.5,
                            [theme.breakpoints.up('sm')]: {
                                fontSize: '2.25rem',
                                lineHeight: 1.25,
                                letterSpacing:0.005
                            }
                        }}>
                        Welcome to Crryto DashBoard
                    </Typography>
                </Box>
                
            </Box>
            <Grid2 container
                justifyContent='space-evenly'
                alignItems='center'
                sx={{p:1}}
            >
                <Grid2 xs={12} md={3}>
                    <CardCom
                        avatar={"bitcoin.png"}
                        title='Bitcoin'
                        subheader="$78.99"
                        trend={-0.005}
                        trendDirection='up'
                        data={[50, 30, 25, 130, 90, 60, 70, 91]}
                        bg={Colors.bitcoin}
                    />
                    
                </Grid2>
                <Grid2 xs={12} md={3}>
                    <CardCom
                        avatar={"dogecoin.png"}
                        title='Bitcoin'
                        subheader="$78.99"
                        trend={-0.005}
                        trendDirection='up'
                        data={[50, 30, 25, 130, 90, 60, 70, 91]}
                        bg={Colors.bitcoin}
                    />

                </Grid2>
                <Grid2 xs={12} md={3}>
                    <CardCom
                        avatar={"ethereum.png"}
                        title='Bitcoin'
                        subheader="$78.99"
                        trend={-0.005}
                        trendDirection='up'
                        data={[50, 30, 25, 130, 90, 60, 70, 91]}
                        bg={Colors.bitcoin}
                    />

                </Grid2>
                <Grid2 xs={12} md={3}>
                    <CardCom
                        avatar={"blackcoin.png"}
                        title='Bitcoin'
                        subheader="$78.99"
                        trend={-0.005}
                        trendDirection='up'
                        data={[50, 30, 25, 130, 90, 60, 70, 91]}
                        bg={Colors.bitcoin}
                    />

                </Grid2>

            </Grid2>

            <Grid2
                justifyContent='space-evenly'
                alignItems='center'
                columnSpacing={2}
                sx={{p:1,maxWidth:'100%'}}
            >
                <Grid2 xs={12} md={8}>
                    <BtcStock />
                </Grid2>
                <Grid2 xs={12} md={8}>

                </Grid2>

            </Grid2>
            
        </MainContainer>
    );
}

export default Feed;