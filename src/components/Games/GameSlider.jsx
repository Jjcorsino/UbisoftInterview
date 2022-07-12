import React from "react";
import "./Game.style.scss";

import Carousel, {
  slidesToShowPlugin,
  arrowsPlugin,
  slidesToScrollPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import GameCard from "./GameCard.page";

export default function GameSlider() {
  // Hardcoded value of all games in array
  // Fetch this array from any database and we can set dynamic game cards in slider
  const GameData = [
    {
      name: "Rainbow Six Extraction",
      available: false,
      xbox: true,
      psp: true,
      windows: true,
      stadia: true,
      apple: false,
      android: false,
      luna: true,
      nintendo: false,
      image: "./assets/ubi-card-r6-extraction.png",
    },
    {
      name: "The division Resurgence",
      available: false,
      xbox: false,
      psp: false,
      windows: false,
      stadia: false,
      apple: true,
      android: true,
      luna: false,
      nintendo: false,
      image: "./assets/ubi-card-the-division-resurgence.png",
    },
    {
      name: "Rider Republic",
      available: false,
      xbox: true,
      psp: true,
      windows: true,
      stadia: false,
      apple: false,
      android: false,
      luna: true,
      nintendo: false,
      image: "./assets/ubi-card-riders-republic.png",
    },
    {
      name: "Skull and Bones",
      available: true,
      windows: false,
      xbox: false,
      psp: false,
      stadia: false,
      apple: false,
      android: false,
      luna: false,
      nintendo: false,
      image: "./assets/ubi-card-skull-and-bones.jpg",
    },
    {
      name: "Far Cry 6",
      available: false,
      windows: true,
      xbox: true,
      psp: true,
      stadia: false,
      apple: false,
      android: false,
      luna: true,
      nintendo: false,
      image: "./assets/ubi-card-farcry-6.jpg",
    },
    {
      name: "Avatar: Frontiers of Pandora",
      available: false,
      xbox: true,
      psp: true,
      windows: true,
      stadia: true,
      apple: false,
      android: false,
      luna: true,
      nintendo: false,
      image: "./assets/ubi-card-avatar-frontiers-of-pandora.png",
    },
    {
      name: "Rainbow Six Siege",
      available: false,
      xbox: true,
      psp: true,
      windows: true,
      stadia: false,
      apple: false,
      android: false,
      luna: false,
      nintendo: false,
      image: "./assets/ubi-card-rainbow-six-siege.jpg",
    },
    {
      name: "Mario + Rabbids Sparks of Hope",
      available: false,
      xbox: false,
      psp: false,
      windows: false,
      stadia: false,
      apple: false,
      android: false,
      luna: false,
      nintendo: true,
      image: "./assets/ubi-card-mario-rabbits.jpg",
    },
    {
      name: "Roller Champions",
      available: false,
      xbox: true,
      psp: true,
      windows: true,
      stadia: false,
      apple: false,
      android: false,
      luna: false,
      nintendo: false,
      image: "./assets/ubi-card-roller-champions.jpg",
    },
    {
      name: "Assassin's Creed Valhalla",
      available: false,
      xbox: true,
      psp: true,
      windows: true,
      stadia: true,
      apple: false,
      android: false,
      luna: false,
      nintendo: false,
      image: "./assets/explore-more-games-sample-7.jpg",
    },
    {
      name: "Rocksmith+",
      available: false,
      windows: true,
      xbox: true,
      psp: true,
      stadia: false,
      apple: false,
      android: false,
      luna: false,
      nintendo: false,
      image: "./assets/ubi-card-rocksmith.png",
    },
    {
      name: "Rainbow Six Mobile",
      available: false,
      xbox: false,
      psp: false,
      windows: false,
      stadia: false,
      apple: true,
      android: true,
      luna: false,
      nintendo: false,
      image: "./assets/ubi-card-R6M.png",
    },
    {
      name: "Just Dance 2022",
      available: false,
      xbox: true,
      psp: true,
      windows: false,
      stadia: true,
      apple: false,
      android: false,
      luna: false,
      nintendo: true,
      image: "./assets/ubi-card-just-dance.jpg",
    },
   
   
  ];

  return (
    <div>
      {/* dynamic responsive carousel  */}
      <Carousel
        plugins={[
          "clickToChange",
          "infinite",
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button className="slider-arrow slider-arrow-left">
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              ),
              arrowRight: (
                <button className="slider-arrow slider-arrow-right">
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
              ),
              addArrowClickHandler: true,
            },
          },
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 6,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
          
        ]}
        breakpoints={{
          640: {
            plugins: [
              "clickToChange",
              "infinite",
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <button className="slider-arrow slider-arrow-left">
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                  ),
                  arrowRight: (
                    <button className="slider-arrow slider-arrow-right">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  ),
                  addArrowClickHandler: true,
                },
              },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 2,
                },
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ],
          },
          900: {
            plugins: [
              "clickToChange",
              "infinite",
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft: (
                    <button className="slider-arrow slider-arrow-left">
                      <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                  ),

                  arrowRight: (
                    <button className="slider-arrow slider-arrow-right">
                      <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                  ),

                  addArrowClickHandler: true,
                },
              },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
              {
                resolve: slidesToScrollPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ],
          },
        }}
      >
        {/* Map all Game card in carousel */}
        {GameData.slice(0, 10).map((game) => {
          return (
            <div className="">
              <GameCard data={game} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
