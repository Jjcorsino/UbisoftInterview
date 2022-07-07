import React from 'react'
import StoreCard from './StoreCard.page'

export default function StoreCardFeatured () {
    //Hardcoded store data values
    const storeData = [
        {
            title: "save up 80% of assassin's creed origins!",
            Image: "./assets/ubi-promo-store-ac-origins.png",
        },
        {
            title: "join the golden age of piracy and risk it all for riches",
            Image: "./assets/ubi-promo-store-skul-and-bones.jpg",
        },
        {
            title: "get up 80% off during our racing sale!",
            Image: "./assets/ubi-promo-store-racing-sale.jpg",
        },
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
        {storeData.slice(0, 3).map((store) => {
            return (
                <StoreCard data={store} />
            )}
        )}

    </div>
  )
}
