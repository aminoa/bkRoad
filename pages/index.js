import Head from 'next/head';
import React from 'react';
import BookDisplay from '../components/book_display';
import Footer from '../components/footer';
import Header from "../components/header";
import styles from '../styles/Home.module.css';

//header handles searching, so it needs to send book titles here, then can go down into bookdisplay

class Home extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {loggedIn: true, search: ''} //should be passed in from somewhere else
    this.textChange = this.textChange.bind(this);
    // this.textSubmit = this.textSubmit.bind(this);
    this.state.books = this.props.books;
    this.OriginalBooks = this.state.books;
  }

  textChange(event) {
    this.setState({search: event.target.value})
    if (!event.target.value) {
      // console.log("empty");
      // console.log(this.OriginalBooks);
      this.setState({books: this.OriginalBooks});
    }
    else {
      var changeBooks = this.OriginalBooks;
      var searchTerm = this.state.search;
      // console.log(searchTerm);
      changeBooks = changeBooks.filter(a => (a.title.toLowerCase().includes(searchTerm.toLowerCase())));
      // changeBooks = changeBooks.filter(function(a) {console.log(a); return (a == this.state.search.toLowerCase());} );
      console.log(changeBooks);
      this.setState({books: changeBooks});
    }
    // if (!event.target.value) { 
      // console.log("empty");
      // this.books = this.OriginalBooks;
    // }
    event.preventDefault();
    // console.log(event);
  }
  
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>bkRoad</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header loggedIn={true} textChange={this.textChange} textSubmit={this.textSubmit}/> 
  
        <h1>Explore Your Personalized Recommendations</h1>
        <div className={styles.bookdisplay}>
          <BookDisplay books={this.state.books}/>
        </div>
  
        <Footer />
       </div>
    )
  }
} 

export default function Take({ books }) {
  return (
    <Home books={books}/>
  )
}

export async function getServerSideProps(context) { //triet 
  const books = [
      {
          title: "The Queen of Paris: A Novel of Coco Chanel",
          author: "Pamela Binnings Ewen" ,
          imageURL: "https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?UserID=NYPL49807&Password=CC68707&Return=1&Type=L&Value=9781982546939&erroroverride=1",
          description: "Legendary fashion designer Coco Chanel is revered for her sophisticated style -- the iconic little black dress -- and famed for her intoxicating perfume Chanel No. 5. Yet behind the public persona is a complicated woman of intrigue, shadowed by mysterious rumors. The Queen of Paris, the new novel from award-winning author Pamela Binnings Ewen, vividly imagines the hidden life of Chanel during the four years of Nazi occupation in Paris in the midst of WWII -- as discovered in recently unearthed wartime files.",
          status: "In stock"            
      },
      {
          title: "The wonders",
          author: "Medel, Elena" ,
          imageURL: "https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?UserID=NYPL49807&Password=CC68707&Return=1&Type=L&Value=9781643753027&erroroverride=1",
          description: "Through the rich inner lives of two ordinary, unforgettable women, award-winning Spanish poet Elena Medel brings a half-century of the feminist movement to life, revealing the simmering truth that money is ultimately the limiting factor in most women's lives",
          status: "Not available"          
      },
      {
          title: "East of hounslow",
          author: "Khurrum Rahman" ,
          imageURL: "https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?UserID=NYPL49807&Password=CC68707&Return=1&Type=L&Value=9780008384661&erroroverride=1",
          description: "No description available",
          status: "In stock"
      }
  ]

  return {
      props: {
          books
      }
  }
}