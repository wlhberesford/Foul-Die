import './LandingPage.css';
import React,{ useState } from 'react';
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { alpha, styled } from '@mui/material/styles';
import { Stack } from '@mui/material';

//import Stack from '@mui/material/Stack';


const colors = createTheme({
    palette: {
        
        clr_acc_dark: "#27374D",
        clr_bg_alt: "#526D82",
        clr_bg_main: "#9DB2BF",
        clr_acc_light: "#DDE6ED",
        
      },
});

const PartySwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: colors.palette.clr_acc_dark,
      '&:hover': {
        backgroundColor: alpha(colors.palette.clr_acc_dark, theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: colors.palette.clr_acc_dark,
    },
  }));



const EnterParty = () =>{
    return (
        <div className='enter-party'>
            <div>
                <TextField id="party-code" label="Party Code" variant="outlined" />

                <TextField id="name" label="Name" variant="outlined" />

            </div>
                <Button variant="text">Enter</Button>

        </div>
    );
}

const MakeParty = () =>{
    return (
        <div className='enter-party'>
            <TextField id="party-code" label="Enter Party Code" variant="outlined" />
            <TextField id="party-code" label="Enter Party Code" variant="outlined" />
            <TextField id="party-code" label="Enter Party Code" variant="outlined" />
            <TextField id="party-code" label="Enter Party Code" variant="outlined" />
            <TextField id="party-code" label="Enter Party Code" variant="outlined" />
            <TextField id="party-code" label="Enter Party Code" variant="outlined" />


        </div>
    );
}

function changeForm(state){
    if(state){
        return MakeParty;
    }
    return EnterParty;
}



function LandingPage() {
    const [newParty, SetNewParty]=useState(false);
    const [partyForm, SetPartyForm]=useState(EnterParty);

    

    return (
        <div className="LandingPage">
            
            <ThemeProvider theme={colors}>
                <div className='LandingPage-inner'>
                    <h1 className='landing-title'>
                        Foul Die
                    </h1>
                    {partyForm}

                    <FormControlLabel 
                    control={<PartySwitch 
                        onChange={() => {SetNewParty(!newParty); SetPartyForm(changeForm(!newParty))}} 
                        checked={newParty}/>}
                    label="Make New Party"/>                        
                </div>
            </ThemeProvider >
        </div>
    );
}

export default LandingPage;