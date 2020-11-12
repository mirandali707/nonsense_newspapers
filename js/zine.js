const edit = document.querySelector('#edit'),
  attrib = document.querySelector('#attrib'),
  gen = document.querySelector('#gen'),
  page_number = document.querySelector('#page_number'),
  prev_page_button = document.querySelector('#previous-page'),
  next_page_button = document.querySelector('#next-page');

let curr_page = 1;

import {zine_pages_dict} from './zine_pages.js';

prev_page_button.addEventListener('click', previous_page);
next_page_button.addEventListener('click', next_page);

function previous_page() {
  console.log('previous_page triggered')
  curr_page = (curr_page == 1) ? 8 : (curr_page - 1) % 8;
  console.log(curr_page);
  console.log(zine_pages_dict[curr_page]);

}

function next_page() {
  console.log('next_page triggered');
  curr_page = (curr_page == 7) ? 8 : (curr_page + 1) % 8;
  console.log(curr_page);
  console.log(zine_pages_dict[curr_page]);
}

function update_page(page_num) {
  console.log('update_page');
}
