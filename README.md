# Infotrade


Infotrade project built with React. [Live Demo]

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech Stack

**React, Bootstrap**

## Features

- **Real-time quote data for US stocks (information available for selected companies)**
- **Data export to Excel**
- **Candlestick data (OHLCV) for stocks available for 24h, seven days and one year**
- **Dark Mode**

## Getting Started

First you need an API token from Finnhub Stock, you can get one by creating an account on their website. After you got your API key, create a **.env** file at root directory of project, copy the line below to the file and replace YOUR_TOKEN with your Finnhub Stock API key.

```
TOKEN=YOUR_TOKEN
```
Finally clone this repository, install dependencies and run the local server

```bash
git clone https://github.com/karolinamarszal/infotrade.git
```

```terminal
cd infotrade
npm install
npm start
```

## Credits

[Finnhub Stock](https://finnhub.io/ 'Finnhub Stock') (Finnhub Stock API)

[React Icons] (https://react-icons.github.io/react-icons/ 'React Icons') (React Icons)

[Some elements based on the Stock Trading App by Sanjeev Thiyagarajan]