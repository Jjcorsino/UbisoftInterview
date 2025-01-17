import React from "react";
import HeroCard from "./HeroCard";
import Carousel from "react-material-ui-carousel";


const HeroSlider = () => {
  // Hardcoded value of all heros in array
  const HeroData = [
    {
      tittle: "SEASON 3 - SUMMER BREAK",
      subtittle:
        "Participate in Project Rebirth, collect seeds and help reforest the Republic!",
      buttonOne: "learn more",
      buttonTwo: "buy now",
      game: "riders-republic",
      imageBackground: "./assets/ubi-homescreen-rr-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-ridersrepublic-logotype.png",
    },
    {
      tittle: "BRAWLHALLA X ASSASSIN'S CREED",
      subtittle: "Assassin’s Creed’s Ezio and Eivor Join Brawlhalla!",
      buttonOne: "watch trailer",
      buttonTwo: "play now",
      game: "brawhalla",
      imageBackground: "./assets/ubi-homescreen-brawhalla-bg-desktop.jpg",
      logoGame: "./assets/ubi-homescreen-brawhalla-logotype.png",
    },
    {
      tittle: "SKULL AND BONES",
      subtittle:
        "Experience a brand-new take on piracy in Skull and Bones. Long live piracy!",
      buttonOne: "Watch trailer",
      buttonTwo: "pre-order",
      game: "skull-and-bones",
      imageBackground: "./assets/ubi-homescreen-skull-and-bones-bg-desktop-1080.jpg",
      logoGame: "./assets/ubi-homescreen-logo-skull-and-bones.png",

    },
    {
      tittle: "THE DIVISION IS COMING TO MOBILE",
      subtittle:
        "Register today for a chance to play The Division Resurgence early and receive all the latest updates.",
      buttonOne: "Watch trailer",
      buttonTwo: "register now",
      game: "the-division-resurgence",
      imageBackground: "./assets/ubi-homescreen-division-mobile-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-logo-division-mobile.png",

    },
    {
      tittle: "THE RABBIDS ARE READY TO PARTY!",
      subtittle:
        "Embark on a legendary journey filled with 50 multiplayer minigames in Rabbids: Party of Legends.",
      buttonOne: "Watch trailer",
      buttonTwo: "buy now",
      game: "Rabbids",
      imageBackground: "./assets/ubi-homescreen-rabbids-party-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-logo-rabbids-party.png",
    },
    {
      tittle: "SAVE UP TO 80% OFF THIS SUMMER!",
      subtittle: "Beat the heat with these sweet deals",
      buttonOne: "shop now",
      buttonTwo: "",
      game: "ubisoft-store",
      imageBackground:
        "./assets/ubi-homescreen-store-summer_sale22-bg-desktop.jpg",
      logoGame: "./assets/ubi-homescreen-logo-ubisoftstore.png",
    },
    {
      tittle: "15 YEARS OF ASSASSIN'S CREED",
      subtittle:
        "Leap into history and celebrate the 15th anniversary of Assassin's Creed. We're honoring the brotherhood all summer long by highlighting an Assassin's Creed game each week!",
      buttonOne: "watch trailer",
      buttonTwo: "learn more",
      game: "assassins-creed",
      imageBackground: "./assets/ubi-homescreen-ac15-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-ac15-logotype.png",
    },
    {
      tittle: "OPERATION VECTOR GLARE",
      subtittle:
        "Rainbow Six Siege is proud to present the second season of Year 7, Operation Vector Glare!",
      buttonOne: "learn more",
      buttonTwo: "watch reveal",
      game: "rainbow-six-siege",
      imageBackground: "./assets/ubi-homescreen-rss6-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-rss6-logotype.png",
    },
    {
      tittle: "JUST DANCE 2022",
      subtittle:
        "The ultimate dance game is back with 40 new tracks, from chart-topping hits to all-time classics!",
      buttonOne: "watch trailer",
      buttonTwo: "buy now",
      game: "just-dance",
      imageBackground: "./assets/ubi-homescreen-jd22-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-jd22-logotype.png",
    },
    {
      tittle: "RAINBOW SIX EXTRACTION",
      subtittle:
        "Take on a dangerous alien parasite in thrilling tactical co-op. Available now!",
      buttonOne: "watch trailer",
      buttonTwo: "buy now",
      game: "rainbow-six-extraction",
      imageBackground: "./assets/ubi-homescreen-rse-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-rse-logotype.png",
    },
    {
      tittle: "FAR CRY 6",
      subtittle: "Starring Giancarlo Esposito, Available Now",
      buttonOne: "watch trailer",
      buttonTwo: "buy now",
      game: "far-cry-6",
      imageBackground: "./assets/ubi-homescreen-fc6-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-fc6-logotype.png",
    },
    {
      tittle: "PLAY SKULL AND BONES AT LAUNCH WITH UBISOFT+!",
      subtittle:
        " Available Day 1 of release in its most Premium Edition",
      buttonOne: "subscribe now",
      buttonTwo: "",
      game: "ubisoft-plus",
      imageBackground: "./assets/ubi-homescreen-ubisoft_plus-skullandbones-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-ubisoftplus-logotype.png",
    },
    {
      tittle: "NEW DISCO FEVER SEASON",
      subtittle:
        "Ready to roll and boogie, skaters? Experience this new season at its grooviest with new rinks, customisation items, game mode and a new Roller Pass filled with funky disco gears!",
      buttonOne: "Download Now",
      buttonTwo: "Watch Trailer",
      game: "roller-champions",
      imageBackground: "./assets/roller-champions.png",
      logoGame: "./assets/ubi-homescreen-logo-rollerchampions.png",
    },
    {
      tittle: "SEASON 6 EPISODE 1: DOMINION FORSBERG",
      subtittle:
        "Time as come to go back on the track! In this new season of The Crew 2, meet Chris Forsberg, three-time world drift champion, and his Forsberg Racing team.",
      buttonOne: "Learn More",
      buttonTwo: "Play for free",
      game: "the-crew-2",
      imageBackground: "./assets/ubi-homescreen-the-crew-two-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-logo-tc2.png",
    },
  ];

  return (
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      indicators={false}
      swipe={false}
      navButtonsProps={{
        style: {
          backgroundColor: "rgba(229, 233, 234, 0.4)",
          borderRadius: '0px 30px 30px 0px',
          width: 60,
          height: 60,
          marginTop: '40vh',
          
        },
      }}
      navButtonsWrapperProps={{
        style: {
          bottom: "0",
          top: "unset",
          backgroundColor: "transparent",
        },
      }}
      
    >
      {HeroData.map((item) => {
        return <HeroCard data={item} />;
      })}
    </Carousel>
  );
};

export default HeroSlider;
