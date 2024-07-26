import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import './PartyFeed.css';

const testFeed=[
    {
        index: 0,
        name: "John Doe",
        time: "8:30",
        roll: "6"
    },
    {
        index: 1,
        name: "John Doe",
        time: "8:25",
        roll: "5"
    },
    {
        index: 2,
        name: "John Doe",
        time: "8:20",
        roll: "3"
    },
    {
        index: 3,
        name: "John Doe",
        time: "8:15",
        roll: "4"
    },
    {
        index: 4,
        name: "John Doe",
        time: "8:10",
        roll: "2"
    },{
        index: 0,
        name: "John Doe",
        time: "8:30",
        roll: "6"
    },
    {
        index: 1,
        name: "John Doe",
        time: "8:25",
        roll: "5"
    },{
        index: 0,
        name: "John Doe",
        time: "8:30",
        roll: "6"
    },
    {
        index: 1,
        name: "John Doe",
        time: "8:25",
        roll: "5"
    },
]


function renderRow(props) {
  const { index, style } = props;
  const row=testFeed[index];

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`(${row.time}) ${row.name} rolled a ${row.roll}`} />
      </ListItemButton>
    </ListItem>
  );
}

function PartyFeed() {
  return (
    <Box
        sx={{ width: '100%', height: '34vh', maxWidth: '100%'}}
    >
    <FixedSizeList
        height={28*(window.innerHeight/100)}
        width={95*(window.innerWidth/100)}
        itemSize={5*(window.innerHeight/100)}
        itemCount={testFeed.length}
        overscanCount={5}
    >
        {renderRow}
    </FixedSizeList>
    </Box>
  );
}

export default PartyFeed