let dishes = [
    new Dish(0,'Spicy seasoned seafood noodles', ' 2.29', 20 , 'img/01.jpg',0),
    new Dish(1,'Salted Pasta with mushroom sauce', '  2.69', 11 , 'img/02.jpg', 0),
    new Dish(2,'Beef dumpling in hot and sour soup', ' 2.99', 16 , 'img/03.jpg',0),
    new Dish(3,'Beef dumpling in hot and sour soup', ' 2.99', 16 , 'img/04.jpg', 0),
    new Dish(4,'Beef dumpling in hot and sour soup', ' 2.99', 16 , 'img/05.jpg', 0),
    new Dish(5,'Healthy noodle with spinach leaf', '  3.29', 22 , 'img/01.jpg',0),
    new Dish(6,'Hot spicy fried rice with omelet', ' 3.49', 13 , 'img/02.jpg', 0),
    new Dish(7,'Spicy instant noodle with special omelette', ' 3.59', 17 , 'img/03.jpg', 0),
    new Dish(8,'Spicy instant noodle with special omelette', ' 3.59', 17 , 'img/04.jpg', 0),
    new Dish(9,'Spicy instant noodle with special omelette', ' 3.59', 17 , 'img/05.jpg', 0),

    new Dish(10,'AGLIO OLIO ZOODLES WITH SUMMER VEGETABLES AND SHRIMP', '  3.29', 20, 'img/cold1.jpg', 1),
    new Dish(11,'Cold sesame cucumber noodles', '  2', 11, 'img/cold2.jpg', 1),
    new Dish(12,'CLEAN BROCCOLI SALAD WITH CREAMY ALMOND DRESSING', '  3.99', 16, 'img/cold3.jpg', 1),
    new Dish(13,'QUINOA AND SHAVED CARROT SALAD WITH CHICKPEAS, CURRANTS AND CASHEWS', '  3.29', 22, 'img/cold4.jpg', 1),
    new Dish(14,'SPIRALIZED SUSHI BOWL WITH SALMON SASHIMI AND GINGER MISO DRESSING', '  3.59', 17 , 'img/cold5.jpg', 1),

    new Dish(15,'Broccoli Chowder', '  3.29', 20, 'img/soup1.jpg', 2),
    new Dish(16,'Country Fish Chowder', '  2', 11, 'img/soup2.jpg', 2),
    new Dish(17,'Cream of Chicken Soup', '  3.99', 16, 'img/soup3.jpg', 2),
    new Dish(18,'Grandmas Chicken n Dumpling Soup', '  3.29', 22, 'img/soup4.jpg', 2),
    new Dish(19,'Weeknight Turkey Tortilla Soup', '  3.59', 17, 'img/soup5.jpg', 2),

    new Dish(20,'Grilled Potatoes', '  3.29', 20, 'img/gril1.jpg', 3),
    new Dish(21,'Grilled Cabbage Steaks', '  2', 11, 'img/gril2.jpg', 3),
    new Dish(22,'Kentucky Grilled Chicken', '  3.99', 16, 'img/gril3.jpg', 3),
    new Dish(23,'Sticky Grilled Chicken', '  3.29', 22, 'img/gril4.jpg', 3),
    new Dish(24,'The Best Grilled Sirloin Tip Roast', '  3.59', 17, 'img/gril5.jpg', 3),

    new Dish(25,'Asian Slaw', '  3.29', 20, 'img/sal1.jpg', 4),
    new Dish(26,'Kale Salad with Carrot Ginger Dressing', '  2', 11, 'img/sal2.jpg', 4),
    new Dish(27,'Shaved Brussels Sprout Salad', '  3.99', 16, 'img/sal3.jpg', 4),
    new Dish(28,'Best Broccoli Salad', '  3.29', 22, 'img/sal4.jpg', 4),
    new Dish(29,'Orzo salad', '  3.59', 17, 'img/sal5.jpg', 4),

    new Dish(30,'Strawberry-mochi', '  3.29', 20, 'img/des1.jpg', 5),
    new Dish(31,'New York Cheesecake', '  2', 11, 'img/des2.jpg', 5),
    new Dish(32,'Strawberry tarte tatin', '  3.99', 16, 'img/des3.jpg', 5),
    new Dish(33,'Apple-pie', '  3.29', 22, 'img/des4.jpg', 5),
    new Dish(34,'Turkey Pahlava', '  3.59', 17, 'img/des5.jpg', 5),
]

let dishTypes = ['Hot Dishes', 'Cold Dishes', 'Soup','Grill', 'Salads', 'Desserts'];


function Dish(id, name, price, remnant, photo, dishTypes){
    this.id = id;
    this.name = name;
    this.price = price;
    this.remnant = remnant;
    this.photo = photo;
    this.dishTypes = dishTypes;
}

// documentdan element olish

const table = document.getElementsByClassName('small-container')[0];
const basketEl = document.getElementsByClassName('basketProducts')[0];
const navbarEl = document.getElementsByClassName('navbar')[0];


function createDishDiv(el){
    let dish = document.createElement('div');
    dish.className = 'menu-card ';

    let name = document.createElement('h3');
    name.className = 'foodname';
    name.innerText = el.name;

    let text = document.createElement('p');
    text.className = 'price';
    text.innerText = el.price + ' ' ;

    let remnant = document.createElement('span');
    remnant.className = 'remnant';
    remnant.innerText = el.remnant + ' Bowls';

    let spanEl = document.createElement('span');
    spanEl.className = 'circle-span';


    let flexDiv = document.createElement('div');
    flexDiv.className = 'flex-div';
    flexDiv.appendChild(text);
    flexDiv.appendChild(spanEl);
    flexDiv.appendChild(remnant);

    let image = document.createElement('img');
    image.className = 'image';
    image.src = el.photo;

    let buttonEL = document.createElement('button');
    buttonEL.className = 'add-button';
    buttonEL.setAttribute('data-type', el.id)
    buttonEL.innerText='Add to Cart';

    dish.appendChild(image);
    dish.appendChild(name);
    dish.appendChild(flexDiv);
    dish.appendChild(buttonEL);
    table.appendChild(dish);

};


function appendDishes(dishes){
    table.innerHTML = '';
   dishes.forEach(el => {
    createDishDiv(el);
   });
}


navbarEl.addEventListener('click', function(e){
    let type = e.target.getAttribute('data-type');
    const links = document.getElementsByClassName('link');
    for(let i = 0; i<links.length; i++){
        links[i].classList.remove('active');
    }
      
    e.target.classList.add('active');

    if(type == -1){
        appendDishes(dishes);
    }else{
        let filteredDishes = dishes.filter(function(el){
            return el.dishTypes == type;
        });
        console.log(filteredDishes);
        appendDishes(filteredDishes);
    }
})

appendDishes(dishes);


// search qismi

const searchInput = document.getElementById('input');
const cards = document.getElementsByClassName('menu-card');

function search(){
    for(el of cards){
        if(el.innerText.toLowerCase().includes(searchInput.value)){
            el.style.display ='block';
        }else{
            el.style.display = 'none'
        }
    }
}

searchInput.addEventListener('keyup', search);


const bgSection = document.getElementsByClassName('bg-section')[0];
const arrowLeft = document.getElementsByClassName('bg-close')[0];
const fixedButton = document.getElementsByClassName('fixed-button')[0];

fixedButton.addEventListener('click', ()=>{
   bgSection.style.display= 'block';
});

arrowLeft.addEventListener('click', ()=>{
    bgSection.style.display = 'none';
});


const basketElement = document.getElementsByClassName('basketProducts')[0];


function createCartItemHtml(el, index) {

    const product = document.createElement('div');
    product.className = 'cart-product';

    const image = document.createElement('img');
    image.className = 'image-fluid';
    image.src = el.photo;
    image.setAttribute('alt', el.name);

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name-div';

    const title = document.createElement('div');
    title.className = 'row text-muted';
    title.innerText = el.name;

    const cat = document.createElement('div');
    cat.className = 'second-price';
    cat.innerText =el.price + ' ';

    nameDiv.appendChild(title);
    nameDiv.appendChild(cat);
    
    const remove = document.createElement('button');
    remove.setAttribute('data-type',el.id)
    remove.className = 'close';
    remove.setAttribute('data-index', index);
    remove.innerHTML = 'Delete';

    product.appendChild(image);
    product.appendChild(nameDiv);
    product.appendChild(remove);

    basketElement.appendChild(product);
};


let myCheck = JSON.parse(localStorage.getItem('cartArr')) ? JSON.parse(localStorage.getItem('cartArr')) : [];


table.addEventListener('click', function(event){
    if(event.target.className =='add-button'){
        let btnID = +event.target.getAttribute('data-type');
        event.target.innerText = 'In Cart!';
        addDishToCart(btnID);
        showCheckItems();
    }
})


function addDishToCart(id){
    if(!myCheck.includes(id)){
        myCheck.push(id);
        localStorage.setItem('cartArr', JSON.stringify(myCheck));
    }
}

function showCheckItems(){
    basketElement.innerHTML = '';
    myCheck.forEach((el)=>{
        let item = dishes.filter((dish)=>{
            return dish.id == el;
        })
        createCartItemHtml(item[0]);
        fixedButton.innerText = myCheck.length;
        total.innerText = showTotal() + '$ ';
    })
}


basketElement.addEventListener('click', function(event){
    if(event.target.className == 'close' || event.target.className =='icon-trash'){
        let elId =+event.target.getAttribute('data-type');
        let parent = event.target.closest('.cart-product');
        myCheck.splice(myCheck.indexOf(elId),1);
        localStorage.setItem('cartArr', JSON.stringify(myCheck));
        basketElement.removeChild(parent);
        fixedButton.innerText = myCheck.length;
        total.innerText = showTotal() + '$ ';
    }
})
fixedButton.innerText = myCheck.length;


const total = document.getElementsByClassName('price_sum')[0];

function showTotal(){
    let sum = 0;
    myCheck.forEach((el)=>{
        let item = dishes.filter((dish)=>{
            return dish.id ==el;
        });
        console.log(item[0].price)
        console.log(sum)
        sum +=Number.parseFloat(item[0].price)
    })
    return sum;
}

total.innerText = showTotal() + '$ ';