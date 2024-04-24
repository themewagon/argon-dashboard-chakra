import { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconifyIcon from 'components/base/IconifyIcon';

const TopbarRight = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', gap: theme.spacing(2)})}>
                <Tooltip title="Settings">
                    <IconButton size="small" sx={{color: 'grey.800'}}>
                        <IconifyIcon icon={'ion:settings-sharp'}/>
                    </IconButton>
                </Tooltip>
                
                <Tooltip title="Notifications">
                    <IconButton size="small" sx={{color: 'grey.800'}}>
                        <IconifyIcon icon={'ion:notifications'}/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Profile">
                    <Box onClick={handleClick} sx={(theme) => ({mr: theme.spacing(0.4), display: 'flex', alignItems: 'center', gap: theme.spacing(0.4), cursor: 'pointer'})}>
                        <IconButton 
                            size="small"
                            aria-controls={open ? 'account-menu' : undefined} 
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true">
                            <Avatar sx={(theme) => ({ height: 30, width: 30, fontSize: '1rem', bgcolor: theme.palette.primary.main })}>M</Avatar>
                        </IconButton>
                        <Typography variant="caption">MR. JHON</Typography>
                    </Box>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        // overflow: 'hidden',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 10,
                            height: 10,
                            bgcolor: '#fff',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <Avatar/> Profile
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <Avatar/> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <ListItemIcon>
                        <IconifyIcon icon={'ion:person-add'}/>
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <ListItemIcon>
                        <IconifyIcon icon={'ion:settings'}/>
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose} sx={{borderRadius: 4}}>
                    <ListItemIcon>
                        <IconifyIcon icon={'ion:log-out'}/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}

export default TopbarRight;