const edit = document.querySelector('#edit'),
  attrib = document.querySelector('#attrib'),
  gen = document.querySelector('#gen'),
  page_number = document.querySelector('#page_number'),
  prev_page_button = document.querySelector('#previous-page'),
  next_page_button = document.querySelector('#next-page');

const num_pages = 8;
let curr_page = 1;

import {zine_pages_dict} from './zine_pages.js';

prev_page_button.addEventListener('click', previous_page);
next_page_button.addEventListener('click', next_page);

function previous_page() {
  curr_page = (curr_page == 1) ? num_pages : (curr_page - 1) % num_pages;
  update_page(curr_page);
}

function next_page() {
  curr_page = (curr_page == num_pages - 1) ? num_pages : (curr_page + 1) % num_pages;
  update_page(curr_page);
}

function update_page(page_num) {
  let page = zine_pages_dict[page_num];
  page_number.innerText = page_num.toString().concat('/',num_pages.toString());
  edit.setAttribute('src', page['edit_href']);
  gen.setAttribute('src', page['gen_href']);
  attrib.innerHTML = page['attrib_text'];
  edit.setAttribute('alt', page['alt_text']);
}
