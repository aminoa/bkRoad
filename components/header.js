import React from 'react';
import LoginItems from "../components/loginitems";
import SearchBar from '../components/searchbar';
import Image from 'next/image'
import styles from '../styles/Home.module.css';


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.topcontainer}>
                <Image className="logo" src="/../static/images/main_logo.png" height="62" width="137"/>
                <SearchBar textChange={this.props.textChange} textSubmit={this.props.textSubmit} />
                <LoginItems loggedIn={this.props.loggedIn}/>
            </div>
        )
    }
}