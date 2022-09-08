import React from 'react';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
const AddGst = () => {
    return (
        <>
            <Stack direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={3}>
                <Stack direction="column"
                    justifyContent="space-around"
                    alignItems="start"
                    spacing={3}>
                    <div style={{ marginTop: '20px' }}>
                        <Typography variant="h5" gutterBottom>Add Client</Typography>
                        <Typography variant="body2" gutterBottom>Enter the GST number of the client<br></br>
                            You can add GST number which have GST<br></br>
                            type as Regular or Composition.
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h5" gutterBottom>Here are your plan details: -</Typography>
                        <Typography variant="body1" gutterBottom> <b>Available GSTIN credits - 478<br></br>
                            Expiry Date - 07/11/2022</b></Typography>
                    </div>
                </Stack>


            </Stack>
        </>
    );
}

export default AddGst;
