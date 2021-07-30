import React from 'react'

export default function NewsCard() {
    return (
        <div className="col-md-12 col-sm-12  d-flex mb-4" >
            <div className="col-6 news-img d-inline-block">
                <img className="img-fluid" src="./assets/news-image-sample-1.jpg" />
            </div> 
            <div className="col-6 news-img d-inline-block">
                <div className="news-detail">
                    <p>October 9,2020</p>
                    <h4>Animating the future - Developer Interview</h4>
                </div>
            </div>
        </div>

    )
}
