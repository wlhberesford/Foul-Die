import {useState} from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import './PartyFeed.css';

import {io} from 'socket.io-client';

const socket = io('http://localhost:5000');
socket.on("connect", () =>{
    console.log("You connected ",socket.id)
});

function messageToString(row){
    return `(${row.time}) ${row.name} rolled a ${row.roll}`;
};

const firstMessage = (<ListItem key={0} component="div" disablePadding>
    <ListItemButton>
        <ListItemText primary={`Welcome to the party`} />
    </ListItemButton>
    </ListItem>);

function PartyFeed() {
    const [feed,setFeed] = useState([]);
    const [feedCount, setFeedCount] = useState(0);
    const feedMessages=firstMessage;

    socket.on("new-message",( name, roll, time) => {
        console.log("In Component:",name,roll,time);

        const newFeed=feed;
        newFeed.push({
            'index': feed.length,
            'name': name,
            'roll': roll,
            'time': time 
        })
        setFeed(newFeed);
        console.log(feed);
    })

    

    useEffect(() => {
        while (feedCount < feed.length){
            feedMessages=(

                // find out how to add old messages to new one

                <ListItem key={0} component="div" disablePadding>
                    <ListItemButton>
                        <ListItemText primary={`Welcome to the party`} />
                    </ListItemButton>
                </ListItem>
            )
            
        }

        
    }, [feed]);

    return (
        <Box
            sx={{ width: '100%', height: '34vh', maxWidth: '100%'}}
        >
        <FixedSizeList
            height={28*(window.innerHeight/100)}
            width={window.innerWidth}
            itemSize={5*(window.innerHeight/100)}
            itemCount={feed.length}
            overscanCount={5}
        >
            {feed}
        </FixedSizeList>
        </Box>
    );
}

export default PartyFeed