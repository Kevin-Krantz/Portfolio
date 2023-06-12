import { Portfolio } from "../types/portfolio";

const portfolio: Portfolio[] = [
  {
    id: 1,
    cover: "/images/BiteBlast Foods Project/bb1.png",
    title: " E-Commerce Full-Stack App with user auth, register, login",
    description: "React, JSX, CSS, Redux, Typescript etc...",
    url: "https://github.com/Kevin-Krantz/Foods-Playground-FE",
    images: [
      "/images/BiteBlast Foods Project/bb1.png",
      "/images/BiteBlast Foods Project/bb2.png",
      "/images/BiteBlast Foods Project/bb3.png",
      "/images/BiteBlast Foods Project/bb4.png",
      "/images/BiteBlast Foods Project/bb5.png",
    ],
  },
  {
    id: 2,
    cover: "/images/Renoveta Project/rv1.png",
    title: "Roof Renovation Full-Stack App with user auth, register, login",
    description: "React, JSX, CSS, Redux, Typescript, etc...",
    url: "https://github.com/Kevin-Krantz/renoveta-frontend",
    images: [
      "/images/Renoveta Project/rv1.png",
      "/images/Renoveta Project/rv2.png",
      "/images/Renoveta Project/rv3.png",
      "/images/Renoveta Project/rv4.png",
    ],
  },
  {
    id: 3,
    cover: "/images/The Movie DB Project/tmdb1.png",
    title: "Interactive online library of popular TV shows",
    description: "React, JSX, CSS, Redux, Typescript, etc...",
    url: "https://github.com/Kevin-Krantz/Working-at-Toxic-Frontend/tree/tmdb-api/tmdb-api",
    images: [
      "/images/The Movie DB Project/tmdb1.png",
      "/images/The Movie DB Project/tmdb2.png",
      "/images/The Movie DB Project/tmdb3.png",
    ],
  },
];

export function getPortfolio() {
  return portfolio;
}
