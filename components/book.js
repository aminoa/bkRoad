import React from 'react'

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      status: this.props.status,
      returnDate: this.props.returnDate,
    }
  }

  render() {
    return (
      <div>
        {/* <Image></Image> */}
        <div>{this.props.name}</div>
        <div>{this.props.status}</div>
        <div>{this.props.date}</div>
      </div>
    );
  }
}

export default Book;
