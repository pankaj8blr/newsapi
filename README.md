## cnapi

This demo is a FullStack sample application which I created as part of code challenge assigned by CondeNast

## APIs used

I have used two APIs which are built on top of Algolia Search's API @ https://hn.algolia.com/api

## Used Two APIs

-To List All stories that are on the front/home page right now
http://hn.algolia.com/api/v1/search?tags=front_page

-Search
-Sorted by relevance, then points, then number of comments
http://hn.algolia.com/api/v1/search?query=${searchText}

## Prerequisites

Beauty of it that we dont need any API key.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

API - Node.js/Express server

## Running the project

### Set up the API side

```
cd api
```

```
npm install
```

```
node app.js
```
