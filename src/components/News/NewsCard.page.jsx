import React from 'react'

export default function NewsCard(props) {
// Responsive News Card component
    return (
        
        <div className="col-12   d-xs-flex d-sm-flex d-md-flex d-lg-flex mb-4" >

            {/* if true then display image in left side */}
            {props.align&&(
                <div className="d-none d-sm-none d-md-block  news-img ">
                    <img className="img-fluid" src={props.news.image} alt="..." />
                </div> 
            )}
            {/* display full image only in mobile view to match UI mockups */}
            <div className="d-xs-block d-sm-block d-md-none  news-img ">
                    <img className="img-fluid" src={props.news.image} alt="..." />
            </div> 
            <div className="col-md-6  news-img ">
                <div className="news-detail">
                    <p>{props.news.date}</p>
                    <h4>{props.news.title}</h4>
                </div>
            </div>
            {/* if true then display image in right side */}
            {!props.align&&(
                <div className="d-none d-sm-none d-md-block   news-img ">
                    <img className="img-fluid" src={props.news.image} alt="..." />
                </div> 
            )}
        </div>
        
    )
}
