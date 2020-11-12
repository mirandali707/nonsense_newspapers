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
  console.log('previous_page triggered')
  curr_page = (curr_page == 1) ? num_pages : (curr_page - 1) % num_pages;
  console.log(curr_page);
  console.log(zine_pages_dict[curr_page]);
  update_page(curr_page);
}

function next_page() {
  console.log('next_page triggered');
  curr_page = (curr_page == num_pages - 1) ? num_pages : (curr_page + 1) % num_pages;
  console.log(curr_page);
  console.log(zine_pages_dict[curr_page]);
  update_page(curr_page);
}

function update_page(page_num) {
  console.log('update_page');
  console.log('PAGE:');
  console.log(page_num);
  console.log(zine_pages_dict[page_num]);

  //fade out
  fade_out(attrib);
  fade_out(edit);
  fade_out(gen);


  // updates
  let page = zine_pages_dict[page_num];
  page_number.innerText = page_num;
  attrib.innerHTML = page['attrib_text'];
  gen.setAttribute('src', page['gen_href']);
  edit.setAttribute('src', page['edit_href']);
  edit.setAttribute('alt', page['alt_text']);

  // fade in
  fade_in(edit);
  fade_in(gen);
  fade_in(attrib);

}

function fade_out(image){
  var fade_effect = setInterval(function(){
    if (!image.style.opacity) {
      image.style.opacity = 1;
    }
    if (image.style.opacity > 0) {
      image.style.opacity -= 0.1;
    }
    else {
      clearInterval(fade_effect);
    }
  }, 50);
}

function fade_in(image){
  var fade_effect = setInterval(function(){
    if (!image.style.opacity) {
      image.style.opacity = 0;
    }
    if (image.style.opacity < 1) {
      image.style.opacity += 0.1;
    }
    else {
      clearInterval(fade_effect);
    }
  }, 50);
}
