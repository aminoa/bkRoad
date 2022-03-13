import Book from "../components/book.js";
import React from "react";
import Grid from "@mui/material/Grid";

export default class BookDisplay extends React.Component {
  constructor(props) {
    super(props);
    // var books = JSON.stringify(props.books);
    this.state = {books: []}
    // for (var i = 0; i < this.props.books.length; i++) {
    //   this.state[i] = this.props.books[i];
    // }

  }

    CreateBookList() {
        let books = [];
        var height = "300";
        var width = "180";

        for (var i = 0; i < this.state.length; ++i) {
            books.push(
            <Grid item xs={2}>
                <Book
                name={this.state[i].name}
                author={this.state[i].author}
                returnDate={this.state[i].returnDate}
                status={this.state[i].status}
                imageURL={this.state[i].imageURL}
                description={this.state[i].description}
                height={height}
                width={width}
                />
            </Grid>
            );
        }
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
