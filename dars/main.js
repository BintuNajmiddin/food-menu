let dishes = [
    {
        name: 'dish1',
        type: 0
    },
    {
        name: 'dish2',
        type: 1
    },
    {
        name: 'dish3',
        type: 2
    },
    {
        name: 'achichuk',
        type: 3
    },
    {
        name: 'olivye',
        type: 3
    },
    {
        name: 'dish5',
        type: 4
    }
]; // ovqatlardan iborat massiv (har bir ovqat bu obyekt)

const tableEl = document.getElementsByClassName('table')[0]; // html da ovqatlar turgan katta div

function createDishDiv(el) { // bitta ovqat obyektini html da chiqarib beruvchi funksiya
    const divEl = document.createElement('div');
    divEl.className = 'dish';
    divEl.innerText = el.name;

    tableEl.appendChild(divEl);
}

// ovqatlar turgan massiv qabul qilib, shu ovqatlarning hammasini html ga chiqarib beruvchi funksiya
function funksiya(arr) { // ovqatlar turgan massiv qabul qiladi
    tableEl.innerHTML = ''; // html da ovqatlar turgan katta divning ichini tozalash
    for(let i = 0; i < arr.length; i++) { // massivdagi har bir ovqatni olib
        createDishDiv(arr[i]); // shu ovqatni html ga qo'shish
    }
}

const navbarEl = document.getElementsByClassName('navbar')[0]; // link lar turgan element

// getAttribute

navbarEl.addEventListener('click', function(e) { // link lar bosilganda
    let type = e.target.getAttribute('data-type'); // shu linkning data-type attributini qiymatini olamiz 

    const links = document.getElementsByClassName('link'); // link elementlarini tanlab olamiz

    for(let i=0; i < links.length; i++) { // har bir link dan
        links[i].classList.remove('active'); // active class ni o'chiramiz
    }

    e.target.classList.add('active'); // bosilgan link ga active class qo'shamiz

    if(type == -1) { // agar all bosilsa
        funksiya(dishes); // funksiya ga barcha ovqatlar turgan massiv berish
    } else { // aks holda

        // ovqatlarni bosilgan link type i bo'yicha filter qilamiz
        let filteredDishes = dishes.filter(function(el) {
            return el.type == type;
        });
    
        funksiya(filteredDishes); // funksiya ga filter qilingan ovqatlar turgan massiv berish
    }

});

funksiya(dishes);