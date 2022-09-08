import React from 'react';
import { Stack } from '@mui/system';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';

const Sidebar = () => {
    return (
        <Stack
  direction="column"
  justifyContent="space-around"
  alignItems="start"
  spacing={3}
  sx={{mt:'20px',ml:'10px'}}
>
<div className='side-content'>
<GroupAddOutlinedIcon/>
   <div style={{marginLeft:'5px'}}>GSTIN list</div>
   </div>
   
   <div className='side-content'>
   <PercentOutlinedIcon/>
   <div style={{marginLeft:'5px'}}>Return Status</div>
   </div>
   <div className='side-content'>
   <EventNoteOutlinedIcon/>
   <div style={{marginLeft:'5px'}}>QRMP</div>
   </div>
   <div className='side-content'>
   <StyleOutlinedIcon/>
   <div style={{marginLeft:'5px'}}>Tags</div>
   </div>
</Stack>
    );
}

export default Sidebar;
