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
            title: "Ubisoft Forward - Saturday, September 10, 2022",
            image: "./assets/UbisoftFWD_News_Header.png"
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
