This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Web Scrapper

The application is used to scrap some meta data's from a website like title , description , largest image size and its link and return the contents .

## Getting Started

First, run the development server:

```bash
npm run dev

or run as a docker build with docker build
# or
yarn dev
```

## Learn More

1. The application has two components , the service which can be run on Apollo Server playground
   Open [http://localhost:3001/pages/api](http://localhost:3001/pages/api)

2. The UI using which integrates with apollo client to the server Open [http://localhost:3001](http://localhost:3001)

## Docker Build

1. docker build --tag web_scrapper
2. docker run web_scrapper
