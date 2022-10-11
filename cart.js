'use strict';

const cartBlock = document.querySelector('.cart-area');
const cartTotalEl = document.querySelector('.cart-total');
const cartTotalArea = document.querySelector('.cart-area-total');
const cartCount = document.querySelector('.basket-count');
const cartSmallEl = document.querySelector('.basket');

const products = {};

//обработки показа окна корзины
document.querySelector('.basket').addEventListener('click', () => {
    cartBlock.classList.toggle('cart-area__active');
});

document
    .querySelector('.product-list-item-flex')
    .addEventListener('click', event => {
        const element = event.target.closest('.product-list-add');
        if(!event.target.closest('.product-list-add')) {
            return;
        }

        
        const id = element.dataset.id;
        const price = element.dataset.price;
        const parent = element.closest('.product-list-item');
        const name = parent.querySelector('.product-list-item-title').textContent;

        addToCart(id, name, price);
    })

function addToCart(id, name, price) {
    if(!(id in products)) {
        products[id] = {
            id: id,
            name: name,
            price: price,
            count: 0,
        }
    }

    products[id].count++; 

    cartTotalEl.innerHTML = getTotalAll();
    if(!cartCount) {
        const spanEl = document.createElement('span');
        spanEl.classList.add('basket-count');
        spanEl.innerHTML = getCountElemtCart();
        cartSmallEl.append(spanEl);
    } else {
        cartCount.innerHTML = getCountElemtCart();
    }
    
    productRender(id);
}

function productRender(id) {
    const cartItem = document.querySelector(`.cart-item[data-id="${id}"]`);
    if(!cartItem) {
        newProductRender(id);
        return;
    }

    cartItem.querySelector('.cart-item__count')
        .textContent = products[id].count;

    cartItem.querySelector('.cart-item__price-all')
        .textContent = getSummCartItem(id);
}

function newProductRender(id) {
    const productHtml = `<div class="cart-area-row cart-item" data-id="${id}">
        <div class="cart-item__name">${products[id].name}</div>
        <div><span class="cart-item__count">${products[id].count}</span> шт.</div>
        <div>$<span class="cart-item__price">${products[id].price}</span></div>
        <div>$<span class="cart-item__price-all">${getSummCartItem(id)}</span></div>
    </div>`;    

    cartTotalArea.insertAdjacentHTML('beforebegin', productHtml);
}

function getTotalAll() {
    let totalAll = 0;
    for (let item in products) {
        totalAll += +(products[item].count * products[item].price).toFixed(2);
    }

    return totalAll;
}

function getCountElemtCart() {
    let countElement = 0;
    for (let item in products) {
        countElement++;
    }

    return countElement;
}

function getSummCartItem(id) {
    return (products[id].count * products[id].price).toFixed(2);
}