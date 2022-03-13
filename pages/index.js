import Head from 'next/head'
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import BookIcon from '@mui/icons-material/Book';
import Footer from '../components/footer';
import Book from "../components/book.js";
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import BookDisplay from '../components/book_display';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value})
    event.preventDefault();
    // console.log(event);
  }

  handleSubmit(event) {
    if (event.which == 13) { //13 is code for enter
      // console.log
      //pass props to new search page 
    }
  }

  render() {
    return (
        <div className={styles.search} onSubmit={this.handleSubmit}>
          <TextField 
            id="search" 
            type="search"
            // type="submit"
            onKeyDown={this.handleSubmit}
            variant="outlined" 
            onChange={this.handleChange}
            name="search"
            size="small" 
            fullWidth="true"
            margin="dense"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </div>
    ) 
  }
}

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

class LoginItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loggedIn: true} //should be passed in from db or something, set here for testing
  }

  render() {
    const loggedIn = this.state.loggedIn;
    console.log(loggedIn);

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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>bkRoad</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* search + cart */}
      <div className={styles.topcontainer}>
        <Search />
        <LoginItems />
      </div>

      <h1>Explore Some Personalized Recommendations</h1>
      <BookDisplay />
      <Footer />
    </div>
  )
} 