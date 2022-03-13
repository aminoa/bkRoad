import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export default class SearchBar extends React.Component {
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
              fullWidth="true" //causes some errors but site still works
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