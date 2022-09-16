export const data: Data[] = [
  {
    id: 1,
    name: "youtube",
    url: "https://www.youtube.com",
    prefix: "y",
    color: "#FF0000",
  },
  {
    id: 2,
    name: "instagram",
    url: "https://www.instagram.com",
    prefix: "i",
    color:
      "#f09433 linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  },
  {
    id: 3,
    name: "reddit",
    url: "https://www.reddit.com",
    prefix: "r",
    color: "#FF4500",
  },
  {
    id: 4,
    name: "facebook",
    url: "https://www.facebook.com",
    prefix: "f",
    color: "#4267B2",
  },
  {
    id: 5,
    name: "letterboxd",
    url: "https://www.hulu.com",
    prefix: "lb",
    color:
      "linear-gradient(90deg, rgba(180,114,45,1) 8%, rgba(47,198,63,1) 54%, rgba(0,212,255,1) 100%)",
  },
  {
    id: 6,
    name: "gmail",
    url: "https://www.gmail.com",
    prefix: "g",
    color:
      "#428f5a linear-gradient(-120deg, #4285f4 0%, #34a853 25%, #fbbc05 50%, #ea4335 100%)",
  },
  {
    id: 7,
    name: "twitter",
    url: "https://www.twitter.com",
    prefix: "t",
    color: "#1DA1F2",
  },
  {
    id: 8,
    name: "twitch",
    url: "https://www.twitch.tv",
    prefix: "tw",
    color: "#9146FF",
  },
  {
    id: 9,
    name: "stackoverflow",
    url: "https://www.stackoverflow.com",
    prefix: "so",
    color: "#f48024",
  },
  {
    id: 10,
    name: "mdn",
    url: "https://www.developer.mozilla.com",
    prefix: "mdn",
    color:
      "linear-gradient(90deg, rgba(247,132,180,1) 11%, rgba(123,197,212,1) 87%)",
  },
  {
    id: 11,
    name: "github",
    url: "https://www.github.com",
    prefix: "gh",
    color: "black",
  },
  {
    id: 12,
    name: "localhost",
    url: "http://localhost:3000",
    prefix: "lh",
    color: "white",
  },
];

export interface Data {
  id: number;
  name: string;
  url: string;
  prefix: string;
  color: string;
}
