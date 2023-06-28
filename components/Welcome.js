import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import {Video} from "./Video";
import {Access} from "./Access";

const Item = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    border: '1px solid',
    borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
    padding: theme.spacing(1),
    borderRadius: '30px',
    display: 'grid',
    justifyContent: 'center',
}));

export default function WelcomePage() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={{xs: 2, md: 1}}
                  columns={{xs: 2, sm: 8}}>
                <Grid xs={2} sm={4}>
                    <Item>
                        <Video/>
                    </Item>
                </Grid>
                <Grid xs={2} sm={4}>
                    <Item>
                        <Access/>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}