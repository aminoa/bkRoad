import styles from '../styles/Home.module.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
      super(props);
    //   this.state = {search: ''}
    //   this.textChange = this.textChange.bind(this);
    //   this.textSubmit = this.textSubmit.bind(this);
    }
  
    render() {
      return (
          <div className={styles.search} onSubmit={this.textSubmit}>
            <TextField 
              id="search" 
              type="search"
              // type="submit"
              onKeyDown={this.props.textSubmit}
              variant="outlined" 
              onChange={this.props.textChange}
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