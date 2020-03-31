import charactersImage from "../assets/characters.jpeg";
import characterHistoryImage from "../assets/first_episode.png";
import characterCompareImage from "../assets/last_episode.png";
import episodesImage from "../assets/episodes.jpeg";
import locationsImage from "../assets/locations.jpeg";

export const slides = [
    {
        image: {
            source: charactersImage,
            alt: "characters"
        },
        linkUrl: "/characters",
        title: "Go to Characters list",
        subtitle: "See our list of characters!"
    },
    // {
    //     image: {
    //         source: characterCompareImage,
    //         alt: "characters"
    //     },
    //     linkUrl: "/compare-characters",
    //     title: "Compare Characters",
    //     subtitle: "Compare characters from our list!"
    // },
    // {
    //     image: {
    //         source: characterHistoryImage,
    //         alt: "characters"
    //     },
    //     linkUrl: "/characters-history",
    //     title: "Go to Characters History",
    //     subtitle: "See the history of all visited characters!"
    // },
    {
        image: {
            source: episodesImage,
            alt: "episodes"
        },
        linkUrl: "/episodes",
        title: "Go to Episodes list",
        subtitle: "See our list of episodes!"
    },
    {
        image: {
            source: locationsImage,
            alt: "locations"
        },
        linkUrl: "/locations",
        title: "Go to locations list",
        subtitle: "See our list of locations!"
    }
];
