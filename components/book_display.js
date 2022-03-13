import Book from "../components/book.js";
import React from 'react';
import Grid from '@mui/material/Grid';

class BookDisplay extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
            <Book 
                name="The Queen of Paris: A Novel of Coco Chanel" 
                author="Sonic"
                returnDate="Test Date" 
                status="In stock" 
                url="https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?UserID=NYPL49807&Password=CC68707&Return=1&Type=L&Value=9781982546939&erroroverride=1" 
                description="Test description"
                height="300"
                width="180"
            />
            </Grid>
            <Grid item xs={2}>
            <Book 
                name="The Queen of Paris: A Novel of Coco Chanel" 
                author="Sonic"
                returnDate="Test Date" 
                status="In stock" 
                url="https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?UserID=NYPL49807&Password=CC68707&Return=1&Type=L&Value=9781982546939&erroroverride=1" 
                description="Test description"
                height="300"
                width="180"
            />
            </Grid>
        </Grid>
        )    
    }
}

export async function getServerSideProps(context) {
    return {
        props: {
            
        }
    }
}

export default BookDisplay;