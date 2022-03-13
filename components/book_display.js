import Book from "../components/book.js";
import React from "react";
import Grid from "@mui/material/Grid";

export default class BookDisplay extends React.Component {
  constructor(props) {
    super(props);
    // var books = JSON.stringify(props.books);
    this.state = {}
    // for (var i = 0; i < this.props.books.length; i++) { couldn't get it to be set to localstate for some reason
    //   this.state[i] = this.props.books[i];
    // }
  }

    CreateBookList() {
        let books = [];
        var height = "300";
        var width = "180";

        for (var i = 0; i < this.props.books.length; ++i) {
            books.push(
                <Grid item xs={2}>
                    <Book
                    name={this.props.books[i].name}
                    author={this.props.books[i].author}
                    returnDate={this.props.books[i].returnDate}
                    status={this.props.books[i].status}
                    imageURL={this.props.books[i].imageURL}
                    description={this.props.books[i].description}
                    height={height}
                    width={width}
                    />
                </Grid>
            );
        }

        // console.log(books);
        return books;
    };

  render() {
    var height = "300";
    var width = "180";

    return (
      <Grid container spacing={2}>
        {this.CreateBookList()}
        {/* <Grid item xs={2}>
          <Book
            name={this.props.name}
            author={this.props.author}
            returnDate={this.props.returnDate}
            status={this.props.status}
            imageURL={this.props.imageURL}
            description={this.props.description}
            height={height}
            width={width}
          />
        </Grid> */}
      </Grid>
    );
  }
}
