const express = require('express');
const cheerio = require('cheerio');
const request = require('request');
const cors = require('cors')
const sablonai = require('./sablonai.json')

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

  app.get("/sablonai", (req, res) => {
    res.send(sablonai)
  })

  app.get("/api/lrt", async ( req, res) => {
    try {
      await request('https://www.lrt.lt/mediateka/tiesiogiai/lrt-televizija', (err, cb, html) => {
        if (!err) {
            const $ = cheerio.load(html);
            let result = []
              $('.channel-item').each( (i, el) => {
              const obj = {}
  
              obj.title = $(el)
              .find('.channel-item__title')
              .text();
  
              obj.time = $(el)
              .find('.data-block__text')
              .text();
  
              obj.url = $(el)
              .find('.channel-item__link')
              .attr('href'); 
  
              obj.name = obj.url.split('/').pop();
              
              result.push(obj);  
            });
            res.send(result)
        }
        console.log(err)
     })
    } catch(e) {
      console.log(e)
    }
   
  });

  module.exports = app;