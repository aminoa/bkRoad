import React from 'react'
import styles from "../styles/bookCard.module.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';


export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.addShelf = this.addShelf.bind(this);

    this.state = {
      title: this.props.title,
      author: this.props.author,
      status: this.props.status,
      description: this.props.description,
      returnDate: this.props.returnDate,
      imageURL: this.props.imageURL,
      height: this.props.height,
      width: this.props.width,
      inShelf: this.props.inShelf,
      anchorEl: null,
      setAnchorEl: null,
    }
  }

  handleClick(event) {
    this.setState({setAnchorEl: event.currentTarget, anchorEl: event.currentTarget});
  }

  handleClose() { 
    this.setState({setAncharEl: null, anchorEl: null})
  }

  addShelf() {
    this.setState({inShelf: true})
  }

  render() {

    // const open = Boolean(this.state.anchorEl);
    // const id = open ? 'simple-popver' : undefined;

    return (
      <div className={styles.bookCard}>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button variant="text" {...bindTrigger(popupState)}>
              <Card sx={{maxWidth: parseInt(this.props.width)}} hoverable>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height={this.props.height}
                    image={this.props.imageURL}
                    alt={this.props.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {this.props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {this.state.author} 
                    </Typography> 
                  </CardContent>
                </CardActionArea>
              </Card>      
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div>
                {/* <p>Add to Cart:  </p> */}
                
                <Button onClick={this.addShelf} variant="text" >Add to Shelf</Button>
                {/* <p>Available: {this.state.status}</p> */}
                <p>Description: {this.state.description}</p> 
              </div>
            </Popover>
          </div>
        )}
      </PopupState>

    </div>
    );
  }
}