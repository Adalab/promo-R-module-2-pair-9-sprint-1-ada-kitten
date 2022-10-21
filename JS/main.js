'use strict';

const formElement = document.querySelector('.js-new-form');

formElement.classList.remove('collapsed');

const listElement = document.querySelector('.js-list');

/* const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">British Shorthair</h4>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>`;

const kittenTwo = ` <li class="card">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

const content = kittenOne + kittenTwo + kittenThree; 
 
listElement.innerHTML = content;  */

const kittenImage1 = 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg';
const kittenImage2 =
  'https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg';
const kittenImage3 =
  'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg';

const kittenName1 = 'Anastacio';
const kittenName2 = 'Fiona';
const kittenName3 = 'Cielo';

const kittenDesc1 =
  'Ruiseño, juguetón, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';
const kittenDesc2 =
  'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const kittenDesc3 =
  'Ruiseño, juguetón, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!';

const kittenRace1 = 'British Shorthair';
const kittenRace2 = 'British Shorthair';
const kittenRace3 = 'British Shorthair';

const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="${kittenImage1}"
    alt="gatito"
  />
  <h3 class="card_title">${kittenName1.toUpperCase()}</h3>
  <h4 class="card_race">${kittenRace1}</h4>
  <p class="card_description">
  ${kittenDesc1}
  </p>
</article>
</li>`;

const kittenTwo = ` <li class="card">
<img
  class="card_img"
  src="${kittenImage2}"
  alt="gatito"
/>
<h3 class="card_title">${kittenName2.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace2}</h4>
<p class="card_description">
${kittenDesc2}
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="${kittenImage3}"
  alt="gatito"
/>
<h3 class="card_title">${kittenName3.toUpperCase()}</h3>
<h4 class="card_race">${kittenRace3}</h4>
<p class="card_description">
${kittenDesc3}
</p>
</li>`;

// const content = kittenOne + kittenTwo + kittenThree;

// listElement.innerHTML = content;

const input_search_desc = document.querySelector('.js_in_search_desc');

input_search_desc.value = '';

const descrSearchText = input_search_desc.value;

if (kittenDesc1.includes(descrSearchText)) {
  listElement.innerHTML += kittenOne;
}

if (kittenDesc2.includes(descrSearchText)) {
  listElement.innerHTML += kittenTwo;
}

if (kittenDesc3.includes(descrSearchText)) {
  listElement.innerHTML += kittenThree;
}

formElement.classList.add('collapsed');
/* CORTAMOS ESTO PARA EL EJERCICIO EVENTOS

if (formElement.classList.contains('collapsed')) {
  formElement.classList.remove('collapsed');
} else {
  formElement.classList.add('collapsed');
}
*/

// BONUS NO FINALIZADO COMPROBAR
/*
let html = '';
const inputRaza = document.querySelector('.js-input');
inputRaza.value = html;
if (kittenRace1 === '') {
  html = `No se ha especificado la raza`;
  inputRaza.value = html;
} else {
  html = race;
}
*/

const plusElement = document.querySelector ('.js-plus');

plusElement.addEventListener('click', (event) => {

  event.preventDefault();

  if (formElement.classList.contains('collapsed')) {
    formElement.classList.remove('collapsed');
  } else {
    formElement.classList.add('collapsed');
  }
})

const añadirElement = document.querySelector ('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');
const validationElement= document.querySelector ('.js-validation');


añadirElement.addEventListener('click', (event)=> {
/*   event.preventDefault(); */
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
     validationElement.innerHTML = 'Debe rellenar todos los valores';
    }
  })

  const searchElement = document.querySelector ('.js-search');
  const inputRaceElement = document.querySelector ('.js-inputRace');
  const searchValidatorElement = document.querySelector ('.js-searchValidator');
  

   searchElement.addEventListener ('click', (event)=> {
    const searchDescValue = input_search_desc.value;
    const searchRaceValue = inputRaceElement.value;
    if (searchDescValue === '' || searchRaceValue === '') {
      searchValidatorElement.innerHTML = 'Debe rellenar todos los valores';
     }
   })


   const cancelElement = document.querySelector ('.js-cancel');

   cancelElement.addEventListener ('click', (event) =>{
    event.preventDefault();
    formElement.classList.add('collapsed');
    const valueDesc = inputDesc.value;
    const valuePhoto = inputPhoto.value;
    const valueName = inputName.value;
    valueDesc ='';
    valuePhoto='';
    valueName ='';
   })
   //SOPORTE: 
   /* 
   ESTA BIEN PONER VALOR ="" O EXISTE FC RESET
   PARA QUITAR REQUIRED DE CADA INPUT PARA QUE NOS DEJE OCULTAR
   BUSCAR: NO SE QUEDA EL PARRAFO DE LA VALIDACIÓN SE BORRA RÁPIDO.
   */