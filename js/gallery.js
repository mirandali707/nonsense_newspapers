const gen = document.querySelector('#gen'),
  page_number = document.querySelector('#page_number'),
  prev_button = document.querySelector('#previous'),
  next_button = document.querySelector('#next'),
  random_button = document.querySelector('#random'),
  total_gens = 100,
  image_path_template = 'img/gallery_imgs/gen_';

let gen_num = 1;

prev_button.addEventListener('click', previous_page);
next_button.addEventListener('click', next_page);
random.addEventListener('click', random);

function previous_page() {
  gen_num = (gen_num == 1) ? total_gens : (gen_num - 1) % total_gens;
  update_page(gen_num);
}

function next_page() {
  gen_num = (gen_num == total_gens - 1) ? total_gens : (gen_num + 1) % total_gens;
  update_page(gen_num);
}

function random() {
  let next_gen = Math.floor(Math.random() * total_gens) + 1;
  while (next_gen == gen_num){
    // loop to ensure we generate a new gen number (not the one the page is currently on)
    next_gen = Math.floor(Math.random() * total_gens) + 1;
  }
  gen_num = next_gen
  update_page(gen_num);
}

function update_page(gen_num) {
  page_number.innerText = gen_num.toString().concat('/',total_gens.toString());
  let idx = gen_num - 1;
  gen.setAttribute('src', image_path_template.concat(idx.toString(), '.jpg'));

}
