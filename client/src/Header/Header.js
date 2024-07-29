import './Header.css'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';


function MyHeader() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const MenuList = (
    <Box
      sx={{  "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer( false)}
    >
      <List >
        <ListItem>
          <h2>Party members</h2>
        </ListItem>
        <ListItem>
          <h2>Roll Screen</h2>
        </ListItem>
        <Divider/>
        <ListItem>
          <h2>Leave Party</h2>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='header-div'>
      <h1 className='header-title' onClick={toggleDrawer(true)}>Foul Die</h1>
      <Drawer open={open} anchor={'top'} onClose={toggleDrawer(false)}>
        {MenuList}
      </Drawer>

    </div>
  );
}

export default MyHeader;


