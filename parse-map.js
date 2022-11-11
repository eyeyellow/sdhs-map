#!/usr/bin/node

const fs = require('fs');
const cheerio = require('cheerio');

const layers = [];

function parseFile(html) {
  const $ = cheerio.load(html);

  $('area').each(function() {
    console.log($(this).attr('coords'));
  })

  // process.stdout.write($.html());
}

fs.readFile('index.html','utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  parseFile(data);
});
