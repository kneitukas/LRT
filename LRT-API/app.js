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

  app.get("/api/lrt", async ( req, res) => {
     await request('https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija', (err, cb, html) => {
      if (!err) {
          const $ = cheerio.load(html);
          let result = []
            $('.channel-item').each( (i, el) => {
            const obj = {}

            obj.title = $(el)
            .find('.channel-item__title')
            .text();

            obj.date = $(el)
            .find('.data-block__text')
            .text();

            obj.url = $(el)
            .find('.channel-item__link')
            .attr('href'); 

            obj.name = obj.url.split('/').pop();
            
            result.push(obj);  
          });
          res.send(result)
          console.log(result)
      }
   })
  });


  module.exports = app;