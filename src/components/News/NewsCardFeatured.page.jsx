import React from 'react'

export default function NewsCardFeatured() {
    return (
        <div className="col-md-12 col-sm-12" >
            <div className="col-12 news-img">
                <img className="img-fluid" src="./assets/news-image-sample-1.jpg" />
            </div> 
            <div className="news-detail" style={{marginLeft:'10px'}}>
                <p>October 9,2020</p>
                <h4>Animating the future - Developer Interview</h4>
            </div>
        </div>
    )
}
