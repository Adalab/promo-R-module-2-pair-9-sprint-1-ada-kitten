'use strict';

/* const formElement = document.querySelector('.js-new-form'); */

// formElement.classList.remove('collapsed');

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

/*
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
*/
// const content = kittenOne + kittenTwo + kittenThree;

// listElement.innerHTML = content;

/*
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

*/

// formElement.classList.add('collapsed');
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

// const plusElement = document.querySelector('.js-plus');

// plusElement.addEventListener('click', (event) => {
//   event.preventDefault();

//   if (formElement.classList.contains('collapsed')) {
//     formElement.classList.remove('collapsed');
//   } else {
//     formElement.classList.add('collapsed');
//   }
// });

const añadirElement = document.querySelector('.js-btn-add');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');
const validationElement = document.querySelector('.js-validation');

añadirElement.addEventListener('click', (event) => {
  /*   event.preventDefault(); */
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    validationElement.innerHTML = 'Debe rellenar todos los valores';
  }
});

/* 
COMENTADO PARA EL EJERICCIO FUNCIONES II

const searchElement = document.querySelector('.js-search');
const inputRaceElement = document.querySelector('.js-inputRace');
const searchValidatorElement = document.querySelector('.js-searchValidator');

searchElement.addEventListener('click', (event) => {
  const searchDescValue = input_search_desc.value;
  const searchRaceValue = inputRaceElement.value;
  if (searchDescValue === '' || searchRaceValue === '') {
    searchValidatorElement.innerHTML = 'Debe rellenar todos los valores';
  }
});
 */
// const cancelElement = document.querySelector('.js-cancel');

// cancelElement.addEventListener('click', (event) => {
//   event.preventDefault();
//   formElement.classList.add('collapsed');
//   const valueDesc = inputDesc.value;
//   const valuePhoto = inputPhoto.value;
//   const valueName = inputName.value;
//   valueDesc = '';
//   valuePhoto = '';
//   valueName = '';
// });
//SOPORTE:
/* 
   ESTA BIEN PONER VALOR ="" O EXISTE FC RESET
   PARA QUITAR REQUIRED DE CADA INPUT PARA QUE NOS DEJE OCULTAR
   BUSCAR: NO SE QUEDA EL PARRAFO DE LA VALIDACIÓN SE BORRA RÁPIDO.
   */

const newFormElement = document.querySelector('.js-new-form');

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}
const linkNewFormElememt = document.querySelector('.js-plus');

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
linkNewFormElememt.addEventListener('click', handleClickNewCatForm);

// function renderKitten(url, desc, nam, race) {
//   const includeArticle = (listElement.innerHTML += `<li class="card">
//   <article>
//     <img
//       class="card_img"
//       src="${url}"
//       alt="gatito"
//     />
//     <h3 class="card_title">${nam.toUpperCase()}</h3>
//     <h4 class="card_race">${race}</h4>
//     <p class="card_description">
//     ${desc}
//     </p>
//   </article>
//   </li>`);
//   return includeArticle;
// }

/* 
renderKitten(kittenImage1, kittenDesc1, kittenName1, kittenRace1);
renderKitten(kittenImage2, kittenDesc2, kittenName2, kittenRace2);
renderKitten(kittenImage3, kittenDesc3, kittenName3, kittenRace3);
 */

//EJERECICIO FUNCIONES 1

/*
const input_search_desc = document.querySelector('.js_in_search_desc');

input_search_desc.value = '';

const descrSearchText = input_search_desc.value;

if (kittenDesc1.includes(descrSearchText)) {
  listElement.innerHTML = renderKitten(
    kittenImage1,
    kittenDesc1,
    kittenName1,
    kittenRace1
  );
}

if (kittenDesc2.includes(descrSearchText)) {
  listElement.innerHTML = renderKitten(
    kittenImage2,
    kittenDesc2,
    kittenName2,
    kittenRace2
  );
}

if (kittenDesc3.includes(descrSearchText)) {
  listElement.innerHTML = renderKitten(
    kittenImage3,
    kittenDesc3,
    kittenName3,
    kittenRace3
  );
}*/
const buttonAdd = document.querySelector('.js-btn-add');

//modifica el evento para cumplir una función manejadora

/* CODIGO YA CREADO
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
*/

const inputRace = document.querySelector('.js-input-race');

function addNewKitten(event) {
  event.preventDefault();
  let urlValue = inputPhoto.value;
  let nameValue = inputName.value;
  let descValue = inputDesc.value;
  let raceValue = inputRace.value;
  return renderKitten(urlValue, descValue, nameValue, raceValue);
}
buttonAdd.addEventListener('click', addNewKitten);

//ejercicios funciones II

const cancelNewKitten = (event) => {
  event.preventDefault();
  formElement.classList.add('collapsed');
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  valueDesc = '';
  valuePhoto = '';
  valueName = '';
};

const buttonCancelForm = document.querySelector('.js-btn-cancel');
buttonCancelForm.addEventListener('click', cancelNewKitten);

//pendiente quitar required

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

const content = kittenOne + kittenTwo + kittenThree;

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;
const buttonSearch = document.querySelector('.js-button-search');

/* if(input_search_desc.value===''){
  listElement.innerHTML = content;
} */ //PINTA LOS GATOS DOBLE

const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value; //dentro de la función
  if (kittenDesc1.includes(descrSearchText)) {
    listElement.innerHTML += kittenOne;
  }
  if (kittenDesc2.includes(descrSearchText)) {
    listElement.innerHTML += kittenTwo;
  }
  if (kittenDesc3.includes(descrSearchText)) {
    listElement.innerHTML += kittenThree;
  }
};

// const searchBox = document.querySelector('.js-search');

// const inputRaceElement = document.querySelector('.js-inputRace');
// const renderRace = (text) => {
//   const raceValue = inputRaceElement.value;
//   if (raceValue === '') {
//     searchBox.innerHTML += `<p class="card_race">No se ha especificado la raza</p>`;
//   } else {
//     searchBox.innerHTML += `<h3 class="card_race">race</h3>`;
//   }
// };

buttonSearch.addEventListener('click', filterKitten);
buttonSearch.addEventListener('click', renderRace);

/*
<h3 class="card_race">race</h3>
<p class="card_race">No se ha especificado la raza</p>
*/

//Creando objetos
const kittenData_1 = {
  image: kittenImage1,
  name: kittenName1,
  desc: kittenDesc1,
  race: kittenRace1,
};
const kittenData_2 = {
  image: kittenImage2,
  name: kittenName2,
  desc: kittenDesc2,
  race: kittenRace2,
};
const kittenData_3 = {
  image: kittenImage3,
  name: kittenName3,
  desc: kittenDesc3,
  race: kittenRace3,
};

//function renderKitten Comentada en la linea 252

/* 
function renderKitten(kittenData) {
  const includeArticle = (listElement.innerHTML += `<li class="card">
      <article>
        <img
         class="card_img"
          src="${kittenData.kittenImage}"
           alt="gatito"
        />
       <h3 class="card_title">${kittenData.KittenName.toUpperCase()}</h3>
        <h4 class="card_race">${kittenData.KittenRace}</h4>
      <p class="card_description">
      ${kittenData.kittenDesc}
      </p>
     </article>
       </li>`);
  return includeArticle;
}
 */
//TEMA ARRAYS

const kittenDataList = [kittenData_1, kittenData_2, kittenData_3];

//TEMA BUCLES

function renderKittenList(kittenDataList) {
  //Completa el código:
  //Vaciamos el innerHTML del <ul> de la página.
  //Iteramos sobre el listado de gatitos
  //Y por cada iteración pintamos un gatito.
  //utilizando la función renderKitten(kittenItem)

  listElement.innerHTML = '';

  for (let index = 0; index < kittenDataList.length; index++) {
    function renderKitten(kittenData) {
      console.log(kittenDataList[index].image);

      const includeArticle = (listElement.innerHTML += `<li class="card">
        <article>
          <img
           class="card_img"
            src="${kittenDataList[index].image}"
             alt="gatito"
          />
         <h3 class="card_title">${kittenData.KittenName.toUpperCase()}</h3>
          <h4 class="card_race">${kittenData.KittenRace}</h4>
        <p class="card_description">
        ${kittenData.kittenDesc}
        </p>
       </article>
         </li>`);
      return includeArticle;
    }
  }
}
renderKittenList(kittenDataList);
