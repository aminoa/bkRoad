import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import styles from '../styles/Sidebar.module.css';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Image from 'next/image'

function TemporaryDrawer(isLoggedIn) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    // const isLoggedIn = isLoggedIn;

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open});
    };

    let list;
    console.log(isLoggedIn.isLoggedIn);
    if (isLoggedIn.isLoggedIn) {
        list =
        <div>
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer("left", false)}
                onKeyDown={toggleDrawer("left", false)}
            >
                <Image src="/static/images/letters.png" width={960} height={440}/>
                <Divider />
                <List>
                    <ListItem button key={"Home"}>
                        <ListItemIcon> 
                            <HomeIcon /> 
                        </ListItemIcon>
                        <Link underline="none" color="inherit" href="/">
                            <ListItemText primary={"Home"} />
                        </Link>
                    </ListItem>                    
                </List>
                <List>
                    <ListItem button key={"Shelf"}>
                        <ListItemIcon> 
                            <BookIcon /> 
                        </ListItemIcon>
                        <Link underline="none" color="inherit" href="/shelf">
                            <ListItemText primary={"Shelf"} />
                        </Link>
                    </ListItem>                    
                </List>
                <List>
                    <ListItem button key={"About"}>
                        <ListItemIcon> 
                            <HelpIcon /> 
                        </ListItemIcon>
                        <Link underline="none" color="inherit" href="/about">
                            <ListItemText primary={"About"} />
                        </Link>
                    </ListItem>                    
                </List>
                <List>
                    <ListItem button key={"Settings"}>
                        <ListItemIcon> 
                            <AccountCircleIcon /> 
                        </ListItemIcon>
                        <Link underline="none" color="inherit" href="/settings">
                            <ListItemText primary={"Settings"} />
                        </Link>
                    </ListItem>                    
                </List>
            </Box>
        </div>

        
    } else {
        list =
        <div>
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer("left", false)}
                onKeyDown={toggleDrawer("left", false)}
            >
                <List>
                    <ListItem button key={"Login"}>
                        <ListItemIcon> 
                            <LoginIcon /> 
                        </ListItemIcon>
                        <Link underline="none" color="inherit" href="/login">
                            <ListItemText primary={"Login"} />
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </div>

    }

    return (
        <div>
            <Button className={styles.hamburgermenu} onClick={toggleDrawer("left", true)} startIcon={<MenuIcon />} size="large"></Button>
            <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
            >
                {list}
            </Drawer>
        </div>
    );
}

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: this.props.loggedIn};
    }

    // eslint-disable-next-line react/display-name
    render() {
        return (
            <div className={styles.topcontainer}>
                <TemporaryDrawer isLoggedIn={this.state.loggedIn}/>
                {/* <Image className="logo" src="/../static/images/main_logo.png" height="62" width="137"/> */}
                {/* <SearchBar textChange={this.props.textChange} textSubmit={this.props.textSubmit} /> */}
                {/* <LoginItems loggedIn={this.props.loggedIn}/> */}
            </div>
        )
    }
}