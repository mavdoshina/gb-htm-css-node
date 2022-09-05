'use strict';

const cartBlock = document.querySelector('.cart-area');
const cartTotalEl = document.querySelector('.cart-total');

const products = {};

//обработки показа окна корзины
document.querySelector('.basket').addEventListener('click', () => {
    cartBlock.classList.toggle('cart-area__active');
});

document
    .querySelector('.product-list-item-flex')
    .addEventListener('click', event => {
        const element = event.target;
        if(!event.target.classList.contains('product-list-add-desc')) {
            return;
        }

        const id = element.dataset.id;
        const price = element.dataset.price;
        const parent = element.closest('.product-list-item');
        const name = parent.querySelector('.product-list-item-title').textContent;

        addToCart(id, name, price);
    })

function addToCart(id, name, price) {
    console.log(id);
    console.log(name);
    console.log(price);
    if(!(id in products)) {
        products[id] = {
            id: id,
            name: name,
            price: price,
            count: 0,
        }
    }

    products[id].count++; 


    console.log(products);
}

// function productRender(id, price, name) {

// }