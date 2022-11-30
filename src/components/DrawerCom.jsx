import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useAppState } from '../state/appState';

export const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(3.6)} - 100px)`,
  
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(3.6)} + 1px)`,
  },
  
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 0),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DrawerCom() {
    const theme = useTheme();
    const {state,dispatch} = useAppState()




    return (
        <Box sx={{ display: 'flex' }}>

        <Drawer variant="permanent" open={state.drawer}>
            <DrawerHeader>
                    <IconButton onClick={() => dispatch({ type: 'drawer' })}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                    justifyContent: state.drawer ? 'initial' : 'center',
                    }}
                >
                    <ListItemIcon
                    sx={{
                        mr: state.drawer ? 3 : 'auto',
                        justifyContent: 'center',
                                }}>
                    <InboxIcon />          
                    </ListItemIcon>
                    <ListItemText primary={'Inbox'} sx={{ opacity: state.drawer ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
                    
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                        justifyContent: state.drawer ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            mr: state.drawer ? 3 : 'auto',
                            justifyContent: 'center',
                                    }}>
                        <AttachMoneyIcon />          
                        </ListItemIcon>
                        <ListItemText primary={'payments'} sx={{ opacity: state.drawer ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                    
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                        justifyContent: state.drawer ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            mr: state.drawer ? 3 : 'auto',
                            justifyContent: 'center',
                                    }}>
                        <AssessmentIcon />          
                        </ListItemIcon>
                        <ListItemText primary={'analytics'} sx={{ opacity: state.drawer ? 1 : 0 }} />
                    </ListItemButton>
                    </ListItem>
                    
                <ListItem disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                        sx={{
                        justifyContent: state.drawer ? 'initial' : 'center',
                        }}
                    >
                        <ListItemIcon
                        sx={{
                            mr: state.drawer ? 3 : 'auto',
                            justifyContent: 'center',
                                    }}>
                        <TextSnippetIcon />          
                        </ListItemIcon>
                        <ListItemText primary={'reposts'} sx={{ opacity: state.drawer ? 1 : 0 }} />
                    </ListItemButton>
                </ListItem>
                    
                    
            </List>
    
            
        </Drawer>
        </Box>
    );
}