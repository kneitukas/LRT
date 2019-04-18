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
      let title;
        request('https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija', (err, res, html) => {
        if (!err) {
            const $ = cheerio.load(html);
            title = $('.channel-item__title');
            console.log(title.text)
        }
     });
     res.send(
        title
     )
  });

 

  module.exports = app;