import React from 'react'

export default function NewsCardFeatured(props) {
    // News Featured card component 
    return (
        <div className="col-12 " >
            <div className="col-12 news-img">
                <img className="img-fluid" src={props.news.image} alt="..." />
            </div> 
            <div className="news-detail" style={{marginLeft:'10px'}}>
                    <p>{props.news.date}</p>
                    <h4>{props.news.title}</h4>
            </div>
        </div>
    )
}
