import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import { AppBar } from '@mui/material';
// import Toolbar from '@material-ui/core/Toolbar';
import { Toolbar } from '@mui/material';
// import Typography from '@material-ui/core/Typography';
import Typography from '@mui/material/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
import CssBaseline from '@mui/material/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
}));

function Header() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar
				position="static"
				color="white"
				elevation={0}
				className={classes.appBar}
			>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						BlogmeUp
					</Typography>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default Header;
