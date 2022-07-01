import React from 'react'
import StoreCard from './StoreCard.page'

export default function StoreCardFeatured () {
    //Hardcoded store data values
    const storeData = [
        {
            title: "save up to 75% off assassin's creed odyssey",
            Image: "./assets/ubi-promo-store-ac15-acod.png",
        },
        {
            title: "ckeck out our newest merch!",
            Image: "./assets/ubi-promo-summer_sale-merch.jpg",
        },
        {
            title: "get 20% off your cart with code sweet20",
            Image: "./assets/ubi-promo-summer_sale.jpg",
        }
    ]
  return (
    <div className='store-card-container'>
        {storeData.map((store) => {
            return (
                <StoreCard data={store} />
            )}
        )}

    </div>
  )
}
