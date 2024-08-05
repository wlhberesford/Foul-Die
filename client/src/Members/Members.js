import './Members.css';
import Header from '../Header/Header';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { List } from '@mui/material';


function RenderRow(member){
    return(
        <ListItem>
            <ListItemText
            primary={member.name}
            secondary={'Has Rolled: ${member.rolls}'}
            />
        </ListItem>

    );
}



function Members(){


    return(
        <div className='Members'>
            <Header/>
            <List>
                {RenderRow({'name':'him','rolls':10})}
            </List>




        </div>
    );
}


export default Members


