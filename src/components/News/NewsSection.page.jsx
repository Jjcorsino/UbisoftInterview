import React,{useState} from 'react'
import './NewsSection.style.scss'

import NewsCardFeatured from './NewsCardFeatured.page'
import NewsCard from './NewsCard.page'
export default function NewsSection() {

    const [filterData,setFilterData] = useState("all");
    const [filterStatus,setFilterStatus] = useState(false);
    const [inverted,setInverted] = useState(false);
    const trueAlign = [0,1,4,5,8,9]
    const NewsData = [
        {
            "title":"Animating the future - Developer Interview",
            "date":"october 9, 2020",
            "image":"./assets/news-image-sample-1.jpg",
        },
        {
            "title":"Rabbids Coding Crashes onto mobile six",
            "date":"october 8, 2020",
            "image":"./assets/news-image-sample-3.jpg",
        },
        {
            "title":"BIPOC of Ubisoft - Fatim Aissatou Diop ghost",
            "date":"october 9, 2020",
            "image":"./assets/news-image-sample-2.jpg",
        },
        {
            "title":"For Honor will be playable on next-gen consoles",
            "date":"october 8, 2020",
            "image":"./assets/news-image-sample-4.png",
        },
        {
            "title":"watch dogs : Legion - new story about details and post-launch plans revealed",
            "date":"october 6, 2020",
            "image":"./assets/news-image-sample-5.jpg",
        },
    ]
    

    // NewsData.filter(news =>{
      
        
    //     return (news.title).toUpperCase().split(" ").some( val =>
    //         filterData.indexOf(val) >= 0
    //     )
        
    // }).map(news => console.log(news))


    

    return (
        <div className="news-section">
             <div className="news-section-title">
                <h2>Latest News</h2>
            </div>
            <div className="filterName ">
                <ul>
                    <li className="nav-item" onClick={()=>{
                        setFilterData("all")
                        setFilterStatus(false);
                        }}>
                        All news</li>
                    <li className="nav-item" onClick={(e)=>{
                        const value = e.target.innerText.split(" ")
                        setFilterData(value)
                        setFilterStatus(true);
                    }}>Ghost recon breakpoint</li>
                    <li className="nav-item" onClick={(e)=>{
                        const value = e.target.innerText.split(" ")
                        setFilterData(value)
                        setFilterStatus(true);
                    }}>Watch dogs legion</li>
                    <li className="nav-item" onClick={(e)=>{
                        const value = e.target.innerText.split(" ")
                        setFilterData(value)
                        setFilterStatus(true);
                    }}>The divison 2</li>
                    <li className="nav-item" onClick={(e)=>{
                        const value = e.target.innerText.split(" ")
                        setFilterData(value)
                        setFilterStatus(true);
                    }}>Rainbow six</li>

                </ul>
            </div>
            

            {!filterStatus&&(
                <div className="container">
                <div class="row">
                    <div className="col-md-6 col-sm-12" >
                        <div class="row">
                            <NewsCardFeatured/>
                            <NewsCard 
                                align = {inverted}
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
                            align = {inverted}
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
            
                    



                {/* <div class="row">
                    
                     <div className="col-md-6 col-sm-12" >
                        <NewsCard/>
                        </div>
                        <div className="col-md-6 col-sm-12" >
                        <NewsCard/>
                        </div>
                        <div className="col-md-6 col-sm-12" >
                        <NewsCard/>
                        </div>
                        <div className="col-md-6 col-sm-12" >
                        <NewsCard/>
                        </div>
                          
                </div> */}
             {/* </div> */}

             <div class="row m-0 p-0">
                <div class="col text-center">
                <button class="btn btn-more">All News</button>
                </div>
            </div>
        </div>
    )
}
