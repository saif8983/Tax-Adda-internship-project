import React from 'react';
import { Stack } from '@mui/system';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import { formHelperTextClasses } from '@mui/material';

const Sidebar = () => {
    return (
        <Stack
  direction="column"
  justifyContent="space-around"
  alignItems="start"
  spacing={2}
  sx={{mt:'20px'}}
>
<div className='side-content'>
<GroupAddOutlinedIcon/>
   <div>GSTIN list</div>
   </div>
   <div>
   <div className='side-content'>
   <img style={{width:"25px"}} src='/icons/percentage.png'></img>
   <div>Return Status</div>
   </div>
   </div>
</Stack>
    );
}

export default Sidebar;
