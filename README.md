[![Build Status](https://travis-ci.org/ddouglasz/We-connect.svg?branch=develop)](https://travis-ci.org/ddouglasz/We-connect)
[![Maintainability](https://api.codeclimate.com/v1/badges/3353fa511defef2f1372/maintainability)](https://codeclimate.com/github/ddouglasz/We-connect/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/ddouglasz/We-connect/badge.svg?branch=develop)](https://coveralls.io/github/ddouglasz/We-connect?branch=develop)
# We-connect# 
 
WeConnect provides a platform that brings businesses and individuals together. This platform creates awareness for businesses and gives the users the ability to write reviews about the businesses they have interacted with and even new ones.  

## Documentation
Find API documentation here:
<a href="https://ddouglasz.github.io/slate/">WE-connect documentation</a>

## WEConnect App UI Template
The gh-pages branch contains the template UI for the WEConnect app

### App Status
Not ready for release yet, still in development mode
<h2>Getting Started</h2>
Before installing, download and install Node.js.<br>
Installation is done using the npm install command:

## Install
```bash
npm install 
```
## Features
* Users can view businesses
* Users can post a business
* Users can review a business
* Users can delete a business
* Users can search for a business
* Users can search for a business by category
* Users can search for a business by location

## Run App(dummy-data)
```bash
npm run start:dev
```

## Run Test
```bash
npm run tests


```
Type of request | route(endpoint)       | Description
----------------| ----------| --------------------
POST   |api/v1/auth/signup|create a new user
POST   |api/v1/auth/login|login existing user
POST   |/api/v1/businesses|create a new business
GET    |/api/v1/businesses|get all businesses
DELETE | /api/v1/businesses/:businessId |delete a particular business
GET    |/api/v1/businesses/:businessId| to retrieve a particular business using its businessId
PUT    |/api/v1/business/:businessId  | to update a particular business using its businessId
POST   |/api/v1/business/:businessId/reviews| to post a review for a given business using its businessId
GET    |/api/v1/business/:businessId/reviews| to get reviews of a particular business using its businessId
GET    |/api/v1/businesses?location=keyword| get businesses based on key word (serach query)
GET    |/api/v1/businesses?category=keyword| get businesses based on key word (serach query).
