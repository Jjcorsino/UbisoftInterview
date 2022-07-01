import React,{useState} from 'react'
import './NewsSection.style.scss'

import NewsCardFeatured from './NewsCardFeatured.page'
import NewsCard from './NewsCard.page'
export default function NewsSection() {

    const [filterData,setFilterData] = useState("all"); 
    const [filterStatus,setFilterStatus] = useState(false);
    const inverted = false;
    // post index that has photo on left side
    const trueAlign = [0,1,4,5,8,9]

    // Hardcoded value of all news data to pass it in different section
    const NewsData = [
        {
            title: "Play Rabbids: Party of Legends Today",
            date: "June 30, 2022",
            image: "./assets/rabbids-party-new.jpg",
        },
        {
            title:"This week at Ubisoft: New Roller Champions Season, Hot Summer Sales Live Now",
            date:"june 24, 2022",
            image:"./assets/thisweek-ubinew.jpg",
        },
        {
            title: "Mario + Rabbids Sparks of Hope Coming to Switch October 20",
            date: "June 29, 2022",
            image: "./assets/mario+rabbids-new.png"
        },
        {
            title: "Star Trek: Prodigy Lands in Growtopia for Limited-Time Event",
            date: "June 27, 2022",
            image: "./assets/StarTrek-new.jpg",
        },
        {
            title: "Rainbow Six Siege Initiatives Rewards New and Existing Players",
            date: "June 23, 2022",
            image: "./assets/rainbow-six-new.jpg",
        },
        {
            title: "Get Up To 80% Off Ubisoft Games During the Summer Sale",
            date: "June 22, 2022",
            image: "./assets/80-discount-new.jpg",
        },
        {
            title:"Animating the future - Developer Interview",
            date:"october 9, 2020",
            image:"./assets/news-image-sample-1.jpg",
        },
        {
            title:"Rabbids Coding Crashes onto mobile six",
            date:"october 8, 2020",
            image:"./assets/news-image-sample-3.jpg",
        },
        {
            title:"BIPOC of Ubisoft - Fatim Aissatou Diop ghost",
            date:"october 9, 2020",
            image:"./assets/news-image-sample-2.jpg",
        },
        {
            title:"For Honor will be playable on next-gen consoles",
            date:"october 8, 2020",
            image:"./assets/news-image-sample-4.png",
        },
        {
            title:"watch dogs : Legion - new story about details and post-launch plans revealed",
            date:"october 6, 2020",
            image:"./assets/news-image-sample-5.jpg",
        },
        {
            title:"This Week at Ubisoft: Assassin’s Creed Kicks Off 15th Anniversary Celebration, Rainbow Six Siege Vector Glare Out Now",
            date: "June 17, 2022",
            image: "./assets/ubi-homescreen-ac15-bg-desktop.png",
        },
    ]
    
    return (
        <div className="news-section">
             <div className="news-section-title">
                <h2>Latest News</h2>
            </div>
            <div className="filterName ">
                <ul>
                {/* set filter on all click event of tags */}
                    <li className="nav-item" onClick={()=>{
                        setFilterData("all")
                        setFilterStatus(false);
                        
                        }}>
                        All news</li>
                    <li className="nav-item" onClick={(e)=>{
                        const value = e.target.innerText.split(" ")
                        setFilterData(value)
                        setFilterStatus(true);
                    }}>Assassin's Creed</li>
                    <li className="nav-item" onClick={(e)=>{
                        const value = e.target.innerText.split(" ")
                        setFilterData(value)
                        setFilterStatus(true);
                    }}>Far Cry</li>
                    <li className="nav-item" onClick={(e)=>{
                        const value = e.target.innerText.split(" ")
                        setFilterData(value)
                        setFilterStatus(true);
                    }}>Rainbow Six</li>
                    <li className="nav-item" onClick={(e)=>{
                        const value = e.target.innerText.split(" ")
                        setFilterData(value)
                        setFilterStatus(true);
                    }}>Riders Republic</li>

                </ul>
            </div>
            
            {/* if no filter set then show all posts with one featured post */}
            {!filterStatus&&(
                <div className="container-lg">
                <div class="row">
                    <div className="col-md-6 col-sm-12" >
                        <div class="row">
                            <NewsCardFeatured
                                 news = {NewsData[0]}
                            />
                            <NewsCard 
                                align = {!inverted}
                                news = {NewsData[1]}
                            />
                        </div>
                    </div>
                     <div className="col-md-6 col-sm-12 p-0" >
                        <NewsCard
                            align = {!inverted}
                            news = {NewsData[2]}
                        />
                        <NewsCard
                            align = {!inverted}
                            news = {NewsData[3]}
                        />
                        <NewsCard
                            align = {!inverted}
                            news = {NewsData[4]}
                        />
                    </div>
                </div>    
                </div>
            )
            }
            {/* Filter is on and display post with list */}
            {filterStatus&&(
                <div className="container">
                    <div class="row">
                        
                        { NewsData.filter(news =>{
                            return (news.title).toUpperCase().split(" ").some( val =>
                                filterData.indexOf(val) >= 0
                            )
                        }).map((data,i) => {
                            
                            return(
                                <div className="col-md-6 col-sm-12 p-0" >
                                    <NewsCard 
                                        align={trueAlign.includes(i)}
                                        news={data}
                                    />
                                    
                                </div>
                            )
                            
                        })}
                        
                        
                        
                    </div>
                </div>
            )
            }
          
             <div class="row m-0 p-0">
                <div class="col text-center">
                <button class="btn btn-more">All News</button>
                </div>
            </div>
        </div>
    )
}
