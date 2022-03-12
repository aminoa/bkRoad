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
      status: this.props.status,
      description: this.props.description,
      returnDate: this.props.returnDate,
      imageURL: this.props.url,
    }
  }

  render() {
    return (
      <div className={styles.bookCard}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.state.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {this.state.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
    )
  }
}

// export default class BookCard extends React.Component {
//   render(){
//   return (
//     <div className={styles.bookCard}>
//       <Card sx={{ maxWidth: 345 }}>
//         <CardActionArea>
//           <CardMedia
//             component="img"
//             height="140"
//             image="/static/images/cards/contemplative-reptile.jpg"
//             alt="green iguana"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               <Book name="Test Book Name" description="Test description" />
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//       </Card>
//     </div>
//   );
//   }
// }

// class Book extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: this.props.name,
//       status: this.props.status,
//       returnDate: this.props.returnDate,
//     }
//   }

//   render() {
//     return (
//       <div>
//         {/* <Image></Image> */}
//         <div>{this.props.name}</div>
//         <div>{this.props.status}</div>
//         <div>{this.props.date}</div>
//       </div>
//     );
//   }
// }

// export default Book;
