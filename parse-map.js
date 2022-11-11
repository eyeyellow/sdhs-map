#!/usr/bin/node

const fs = require('fs');
const cheerio = require('cheerio');

const layers = [];

function parseFile(html) {
  const $ = cheerio.load(html);

  $('area').each(function() {
    // link handling
    let href = $(this).attr('href');
    if (href) {
      const linkMatch = /http:\/\/sdhistoricalsociety/.test(href);
      if (linkMatch) {
        // replace .org with .net
        href = href.replace('sdhistoricalsociety.org', 'sdhistoricalsociety.net');
      } else {
        return; // if no match, then don't collect it
      }
    }
    // shape parsing
    const shape = $(this).attr('shape');
    let coords = $(this).attr('coords').split(',');
    if (shape === 'circle') {
      coords = handleCircle(coords);
    } else if (shape === 'rect') {
      coords = handleRect(coords);
    } else {
      return;
    }
    // title
    // let title = $(this).attr('title');
    // if (title) {
    //   title = title.replace(/'/g, "\'");
    // }
    layers.push({ coords, href });
  })
  const newLayersJson = JSON.stringify(layers);
  const newLayers = `const layers = '${newLayersJson}'`;
  fs.writeFile('new-layers.js', newLayers, err => {
    if (err) {
      console.error(err);
    }
  });
}

function handleCircle([x,y,radius]) {
  return [parseInt(x), parseInt(y)];
}

function handleRect([x1,y1,x2,y2]) {
  const height = parseInt(y2 - y1);
  const width = parseInt(x2 - x1);
  return [parseInt(x1)+(height/2),parseInt(y1)+(width/2)];
}

fs.readFile('index.html','utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  parseFile(data);
});
