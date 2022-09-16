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
    prefix: "i", color:
      "#f09433 linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
  },
  {
    id: 3,
    name: "netflix",
    url: "https://www.netflix.com",
    prefix: "n",
    color: "#E50914",
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
    name: "hulu",
    url: "https://www.hulu.com",
    prefix: "h",
    color: "#1ce783",
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
];

export interface Data {
  id: number;
  name: string;
  url: string;
  prefix: string;
  color: string;
}
