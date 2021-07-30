import React,{useState} from 'react'
import './NewsSection.style.scss'

import NewsCardFeatured from './NewsCardFeatured.page'
import NewsCard from './NewsCard.page'
export default function NewsSection() {

    const [filter,setFilter] = useState("all");
    const [filterStatus,setFilterStatus] = useState(false);

    const NewsData = [
        {
            "title":"Animating the future - Developer Interview",
            "data":"october 9, 2020",
            "img":"",
        },
        {
            "title":"Rabbids Coding Crashes onto mobile",
            "data":"october 8, 2020",
            "img":"",
        },
        {
            "title":"BIPOC of Ubisoft - Fatim Aissatou Diop",
            "data":"october 9, 2020",
            "img":"",
        },
        {
            "title":"For Honor will be playable on next-gen consoles",
            "data":"october 8, 2020",
            "img":"",
        },
        {
            "title":"watch dogs : Legion - new story about details and post-launch plans revealed",
            "data":"october 6, 2020",
            "img":"",
        },
    ]
    
    return (
        <div className="news-section">
             <div className="news-section-title">
                <h2>Latest News</h2>
            </div>
            <div className="filterName ">
                <ul>
                    <li onClick={()=>{
                        setFilter("all")
                        setFilterStatus(false);
                        }}>
                        All news</li>
                    <li onClick={(e)=>{
                         const value = e.target.innerText.split(" ")
                        setFilter(value)
                        setFilterStatus(true);
                    }}>Ghost recon breakpoint</li>
                    <li>Watch dogs legion</li>
                    <li>The divison 2</li>
                    <li>Rainbow six</li>

                </ul>
            </div>

            

            
            <div className="container">
                <div class="row">
                    <div className="col-md-6 col-sm-12" >
                        <div class="row">
                            <NewsCardFeatured/>
                            <NewsCard/>
                        </div>
                    </div>
                     <div className="col-md-6 col-sm-12" >
                        <NewsCard/>
                        <NewsCard/>
                        <NewsCard/>
                    </div>
                </div>
                    



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
             </div>

             <div class="row m-0 p-0">
                <div class="col text-center">
                <button class="btn btn-more">All News</button>
                </div>
            </div>
        </div>
    )
}
