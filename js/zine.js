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

import {zine_pages_dict} from './zine_pages.js';
// const pages = zine_pages_dict;
console.log(zine_pages_dict[2]); // TEST!!

prev_page_button.addEventListener('click', previous_page);
next_page_button.addEventListener('click', next_page);

function previous_page() {
  console.log('previous_page triggered')
  curr_page = (curr_page == 1) ? 8 : (curr_page - 1) % 8;
  console.log(curr_page)
  console.log(zine_pages_dict[curr_page])

}

function next_page() {
  console.log('next_page triggered')
  curr_page = (curr_page == 7) ? 8 : (curr_page + 1) % 8;
  console.log(curr_page)
  console.log(zine_pages_dict[curr_page])
}

function update_page(page_num) {
  console.log('update_page')
}
