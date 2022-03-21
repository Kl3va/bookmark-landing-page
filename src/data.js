import React from "react";
import imgHeader from "../src/images/illustration-hero.svg";
import simpleBookmarkingImg from "../src/images/illustration-features-tab-1.svg";
import speedySearchingImg from "../src/images/illustration-features-tab-2.svg";
import easySharingImg from "../src/images/illustration-features-tab-2.svg";

export const links = [
  {
    id: 1,
    url: "/",
    text: "features",
  },
  {
    id: 2,
    url: "/",
    text: "pricing",
  },
  {
    id: 3,
    url: "/",
    text: "contact",
  },
  {
    id: 4,
    url: "/",
    text: "login",
  },
];

export const subHeader = {
  h1: "A Simple Bookmark Manager",
  p: "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
  img: imgHeader,
  button: ["Get it on Chrome", "Get it on Firefox"],
};

export const features = {
  header: "Features",
  text: "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.",
  featuresTitle: ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"],
  featuresContents: [
    {
      image: simpleBookmarkingImg,
      imageAlt: "Bookmark Image",
      title: "Bookmark in one click",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      btnText: "More Info",
    },
    {
      image: speedySearchingImg,
      imageAlt: "speedy search Image",
      title: "Intelligent search",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      btnText: "More Info",
    },
    {
      image: easySharingImg,
      imageAlt: "easy sharing Image",
      title: "Share your bookmarks",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      btnText: "More Info",
    },
  ],
};
