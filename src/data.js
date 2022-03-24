import React from "react";
//Image for header section
import imgHeader from "../src/images/illustration-hero.svg";

//images for features section
import simpleBookmarkingImg from "../src/images/illustration-features-tab-1.svg";
import speedySearchingImg from "../src/images/illustration-features-tab-2.svg";
import easySharingImg from "../src/images/illustration-features-tab-3.svg";

//Images for download section
import chromeLogo from "../src/images/logo-chrome.svg";
import firefoxLogo from "../src/images/logo-firefox.svg";
import operaLogo from "../src/images/logo-opera.svg";

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

//Download.js Data
export const download = {
  header: "Download the extension",
  text: "We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.",
  downloadContents: [
    {
      logo: chromeLogo,
      logoAlt: "A chrome logo",
      title: "Add to Chrome",
      description: "Minimum version 62",
      btnText: "Add & Install Extension",
    },
    {
      logo: firefoxLogo,
      logoAlt: "A firefox logo",
      title: "Add to Firefox",
      description: "Minimum version 55",
      btnText: "Add & Install Extension",
    },
    {
      logo: operaLogo,
      logoAlt: "An opera logo",
      title: "Add to Opera",
      description: "Minimum version 46",
      btnText: "Add & Install Extension",
    },
  ],
};

export const faqData = {
  header: "Frequently Asked Questions",
  text: "Here are some of our FAQs. If you have any other questions you'd like  answered please feel free to email us.",
  faqContents: [
    {
      id: 1,
      question: "What is Bookmark?",
      answer:
        "Bookmark is the best bookmarking app on the market that boosts of a clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly.",
    },
    {
      id: 2,
      question: "How can I request a new browser?",
      answer:
        "You can request a new browser through our dedicated App store. Visit our store of Google Play or Apple Store. Contact our support team if you encounter any troubles installing the application on your device.",
    },
    {
      id: 3,
      question: "Is there a mobile app?",
      answer:
        "Yes! We recently launched a mobile app version for android and iOS. You can proceed to your respective App stores to download Bookmark.",
    },
    {
      id: 4,
      question: "What about other Chromium browsers?",
      answer:
        "Chromium browsers are currently in development and scheduled to be released in due time. Our developers are working round the clock to push the final app into production.",
    },
  ],
  btnText: "More Info",
};

//Form section data
export const formData = {
  text: "35000+ ALREADY JOINED",
  heading: "Stay up-to-date with what we're doing",
  btnText: "Contact Us",
  placeholder: "Enter your email address",
  errorMessage: "Oops make sure it's an email",
};
