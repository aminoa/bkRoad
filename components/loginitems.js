// import React from 'react';
// import LoginItems from "../components/header"
// import styles from '../styles/Home.module.css'
// import React from 'react';
// import Link from '@mui/material/Link';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import React from 'react';
import styles from '../styles/Home.module.css';

function LibraryButton() {
    return (
      <div className={styles.libraryaccount}>
        <Link className={styles.librarylink} href="/shelf"><IconButton color="primary"> <BookIcon fontSize="large" /></IconButton></Link>
        <Link href="/settings"><IconButton color="primary"><AccountCircleIcon fontSize="large"/></IconButton></Link>
      </div>
    )
  }
  
  function LoginButton() {
    return (
      <div className={styles.loginbutton} > {/* onClick={this.handleLoginClick}*/}
        <Button variant="contained" href="/login">Login</Button>
      </div>
    )
  }

export default class LoginItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loggedIn: this.props.loggedIn} //should be passed in from db or something, set here for testing for now but bad
    }

    render() {
        const loggedIn = this.state.loggedIn; 
        // console.log(loggedIn);

        return (
        <div>
            {loggedIn
            ?  <LibraryButton/>
            : <LoginButton/>
            }
        </div>
        )
    }
}