# Users Serverless API

This is the Serverless REST API for Users. This is intended to be used as a part of a micro-services systems. However it holds no dependency with the rest of the ecosystem.

## Installing dependencies

* ```npm install``` to install all the necessary dependencies.
* Create a `.env` file based on `.env.example` and insert your db connection string and other credentials

## To Test It Locally

```bash
npm run local
```

### Deploy on AWS, simply run:

```
$ npm run deploy

# or

$ serverless deploy
```