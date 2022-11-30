import { styled, useTheme,alpha } from '@mui/material/styles';
import {Box, FormControlLabel, FormGroup, IconButton, InputBase, Menu, MenuItem, Switch, Toolbar, Typography, useMediaQuery} from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import { Colors } from '../styles/colors';
import { useAppState } from '../state/appState';
import { useEffect } from 'react';

const drawerWidth = 240
const AppBar = styled(MuiAppBar)(({ theme,open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'],{
        easing: theme.transitions.easing.sharp,
        duration:theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition:theme.transitions.create(['width', 'margin'],{
            easing: theme.transitions.easing.sharp,
            duration:theme.transitions.duration.enteringScreen
        })
    })
}))

const Search = styled(`div`)(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.searchbar.borderRadius,
    backgroundColor: alpha(Colors.white,0.15),
    '&:hover': {
        backgroundColor:alpha(Colors.white,0.15)
    },
    width: '100%',
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block',
        marginLeft: theme.spacing(1),
        width:'auto'
    }
}))

const SearchIconWrapper = styled(`div`)(({ theme }) => ({
    position: 'absolute',
    height: '100%',
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents:'none'
}))

const StyledSearchInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: "100%",
        [theme.breakpoints.up('sm')]: {
            width: '18ch',
            '&:focus': {
                width:'24ch'
            }
        }
        
    }
    
    
}))

function PrimaryAppBar({switchColorMode}) {
    const { state, dispatch } = useAppState()
    const [anchorEl, setAnchorEl] = useState(null)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const [themeModeSwtich,setThemeModeSwtich] = useState(false)
    const switchThemeMode = () => {
        dispatch({ type: 'theme-switch' })
        switchColorMode(themeModeSwtich)
    }
    useEffect(() => {
        dispatch({ type: 'theme-switch' })
        switchColorMode(themeModeSwtich)
    },[themeModeSwtich])
    return (
        <Box>
            <AppBar position='fixed' open={state.drawer}>
                <Toolbar>
                    <IconButton
                        size='large'
                        color='inherit'
                        edge='start'
                        sx={{
                            marginRight: 5,
                            ...(state.drawer && { display: 'none' })
                        }}
                        onClick={() => dispatch({type:'drawer'})}
                    >
                        
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        sx={{
                            flexGrow: 1,
                            display: { 
                                xs: 'none',
                                sm:'block'
                            }}}>
                        React MUI Dashboard
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledSearchInputBase />
                    </Search>
                    <Box sx={{
                        width: {
                            xs: '100%',
                            md:'10%'
                        }
                    }}
                        display='flex'
                        justifyContent='space-evenly'
                        alignItems='center'
                    >
                        {matches && <SearchIcon />}
                        <NotificationsIcon />
                        <AccountCircleIcon />
                        <IconButton sx={{ color: 'inherit' }}
                            onClick={(e)=>setAnchorEl(e.currentTarget)}
                        >
                            <SettingsIcon />
                        </IconButton>
                        
                        
                    </Box>

                </Toolbar>
            </AppBar>
            <Menu
                id="setting-menu"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={() => setAnchorEl(null)}>
                <MenuItem>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch
                                checked={themeModeSwtich}
                                onClick={()=> setThemeModeSwtich(s=>!s)}/>}
                            label={state.theme === 'light'?'Light':'Dark'}
                        />

                    </FormGroup>
                </MenuItem>
            </Menu>

        </Box>
    );
}

export default PrimaryAppBar;