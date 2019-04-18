const express = require('express');
const cheerio = require('cheerio');
const request = require('request')

const app = express();

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
       "Origin,X-Requested-With,Content-Type, Accept, Authorization"
      );
      res.setHeader( 
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS, PUT"
    );
    next();
  });

  app.get("/",( req, res) => {
     request('https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija', (err, res, html) => {
        if (!err && res.statusCode == 200) {
            const $ = cheerio.load(html);
            console.log($('html'))
        }
     })
  });

 

  module.exports = app;