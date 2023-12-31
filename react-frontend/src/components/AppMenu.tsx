import { AppBar, Box, Button, Toolbar, Typography, colors } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';


export const AppMenu = () => {
    const location = useLocation();
	const path = location.pathname;

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" sx={{ marginBottom: "20px", backgroundColor: colors.green[500] }}>
				<Toolbar>
					<Button
						to="/"
						component={Link}
						color="inherit"
						sx={{ mr: 2 }}
						startIcon={<HomeIcon />}>
					</Button>
					<Button 
						to="/club-management" 
						component={Link}
						color="inherit"
						sx={{ mr: 5 }}>
						Club Management
					</Button>
					<Button 
						to="/player-management" 
						component={Link}
						color="inherit"
						sx={{ mr: 5 }}>
						Player Management
					</Button>
					<Button 
						to="/competition-management" 
						component={Link}
						color="inherit"
						sx={{ mr: 5 }}>
						Competition Management
					</Button>
					<Button 
						to="/record-management" 
						component={Link}
						color="inherit"
						sx={{ mr: 5 }}>
						Record Management
					</Button>
				</Toolbar>
				<Toolbar sx={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
					<Button
						to="/login"
						component={Link}
						color="inherit"
						sx={{ mr: 5 }}
						startIcon={<LoginIcon />}
						> 
						Login
					</Button>
					<Button 
						to="/register" 
						component={Link}
						color="inherit"
						sx={{ mr: 5 }}
						startIcon={<HowToRegIcon />}>
						Register
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	)
}