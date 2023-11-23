import React from "react";
import "../styles/Home.css";
import {Link} from 'react-router-dom'
import BannerImage from '../images/pizza_background.jpg'


export const Home =()=>{
    return(
        <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
            <div className="headerContainer" >
                <h1>PIZZA TO FIT ANY TASTE</h1>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
}