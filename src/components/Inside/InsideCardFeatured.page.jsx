import React from 'react'
import InsideCard from './InsideCard.page'

export default function InsideCardFeatured() {
    //Harcoded inside data
    const insideData = [
        {
            title:"ubisoft support  for women and lgbtq+ communities",
            image: "./assets/ubi-inside-support-lgbtq.png"
        },
        {
            title:"ubisoft scalar: changing the way developers make games",
            image:"./assets/ubi-inside-scalar.png"
        },
        {
            title: "cameron lee named rainbow six vp, executive producer",
            image: "./assets/ubi-inside-cameron-lee.png"
        }
    ]

  return (
    <div className='inside-card-container'>
        {insideData.map((item) => {
            return (
                <InsideCard data={item}/>
            )}
        )}
    </div>
  )
}
