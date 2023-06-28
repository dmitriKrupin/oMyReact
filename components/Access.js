import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    maxWidth: '100%',
    bgcolor: 'background.paper',
    textAlign: 'center',
};

export function Access() {
    return (
        <List sx={style} component="nav" aria-label="mailbox folders">
            <ListItem sx={{textAlign: 'center'}}>
                <ListItemText primary="КОНТРОЛЬ ДОСТУПА"/>
            </ListItem>
            <Divider/>
            <ListItem button divider sx={{textAlign: 'center'}}>
                <ListItemText primary="калькулятор стоимости установки контроля доступа"/>
            </ListItem>
            <ListItem button sx={{textAlign: 'center'}}>
                <ListItemText primary="посмотреть примеры выполненных работ"/>
            </ListItem>
            <ListItem button sx={{textAlign: 'center'}}>
                <ListItemText primary="посмотреть отзывы клиентов"/>
            </ListItem>
            <Divider light/>
        </List>
    );
}