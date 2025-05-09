# Zazuko RDF Converter

[https://converter.zazuko.com](https://converter.zazuko.com)

## Run locally

You will need [node and NPM](https://nodejs.org/en/download), then simply run `npm start -- --open`. The app will open in the browser 

## Build and deploy

Executing `npm run build` will create an optimised build in the directory `dist`. 
These are just static files which can be hosted on any plain HTTP server.

```shell
npx http-server dist
```
