import React from 'react'
import styles from "../styles/bookCard.module.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      author: this.props.author,
      status: this.props.status,
      description: this.props.description,
      returnDate: this.props.returnDate,
      imageURL: this.props.url,
      height: this.props.height,
      width: this.props.width
    }
  }

  render() {
    return (
      <div className={styles.bookCard}>
      <Card sx={{maxWidth: parseInt(this.props.width)}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={this.props.height}
            image={this.props.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              {this.props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.state.author} 
            </Typography> 
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    )
  }
}