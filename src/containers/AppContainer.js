import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';
import {AppBar, Button, createTheme, IconButton, ThemeProvider, Toolbar, Typography} from "@mui/material";
import AllProductScreen from '../screens/AllProductScreen'
import AddProductScreen from "../screens/AddProductScreen";


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const header_menu = [
    {title: "Все продукты", icon: <RestoreIcon />},
    {title: "Добавить продукты", icon: <RestoreIcon />},
    {title: "Все продукты", icon: <RestoreIcon />},
    {title: "Все продукты", icon: <RestoreIcon />},

  ]
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });
  console.log(value)
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <AppBar color={'primary'}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*<MenuIcon />*/}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        <Paper sx={{ position: 'fixed', top: 60, left: 0, right: 0 }} >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            {header_menu.map(v => (
              <BottomNavigationAction label={v.title} icon={v.icon} />
            ))}
          </BottomNavigation>
        </Paper>
      </AppBar>
      </ThemeProvider>
      <div style={{marginTop: 130}}>
        {value === 0 && <AllProductScreen/>}
        {value === 1 && <AddProductScreen/>}
      </div>
    </>
  );
}

