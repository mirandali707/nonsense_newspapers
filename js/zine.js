const edit = document.querySelector('#edit'),
  attrib = document.querySelector('#attrib'),
  gen = document.querySelector('#gen'),
  page_number = document.querySelector('#page_number'),
  prev_page_button = document.querySelector('#previous-page'),
  next_page_button = document.querySelector('#next-page'),
  curr_page = 1;

// const zine_pages_dict = readJSON('zine_pages.js');
// console.log(zine_pages_dict);

// var request = new XMLHttpRequest();
// request.open("GET", "zine_pages.json", false);
// request.send(null)
// var zine_pages_dict = JSON.parse(request.responseText);

import {zine_pages_dict} from `zine_pages.js`
console.log(zine_pages_dict);
