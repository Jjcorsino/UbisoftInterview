import React from "react";
import HeroCard from "./HeroCard";
import Carousel from "react-material-ui-carousel";


const HeroSlider = () => {
  // Hardcoded value of all heros in array
  const HeroData = [
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
      tittle: "RIDERS REPUBLIC SEASON 2 IS LIVE!",
      subtittle:
        "Face off in a new 6v6 mode and claim your victory in the Showdown Arena. Play Now!",
      buttonOne: "learn more",
      buttonTwo: "buy now",
      game: "riders-republic",
      imageBackground: "./assets/ubi-homescreen-rr-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-ridersrepublic-logotype.png",
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
      tittle: "BATTLE PASS SEASON 6 IS LIVE",
      subtittle: "Play now and unlock 85 tiers of magical greatness!",
      buttonOne: "watch now",
      buttonTwo: "play now",
      game: "brawhalla",
      imageBackground: "./assets/ubi-homescreen-brawhalla-bg-desktop.png",
      logoGame: "./assets/ubi-homescreen-brawhalla-logotype.png",
    },
    {
      tittle: "JOIN UBISOFT+",
      subtittle:
        "Celebrate 15 years of legendary, history-bending adventures. Play all of the Assassin's Creed games with Ubisoft+!",
      buttonOne: "subscribe now",
      buttonTwo: "",
      game: "ubisoft-plus",
      imageBackground: "./assets/ubi-homescreen-ubiplus-bg-desktop.jpg",
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
