import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar: React.FC = () => {
    return (
        <AppBar position="fixed" sx={{ background: '#00549E' }}>
            <Toolbar>
                {/* Logo on the left */}
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <img src="/united.png" alt="United Airlines" width="50" height="50" />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    United Airlines
                </Typography>

                {/* Menu items on the right */}
                <Button color="inherit">Find Flights</Button>
                <Button color="inherit">Credit Cards</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
