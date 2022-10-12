Vue.component('products', {
    data(){
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            imgCatalog: 'https://via.placeholder.com/200x150',
        }
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        // this.$parent.getJson(`${API + this.catalogUrl}`)
        //     .then(data => {
        //         for(let el of data){
        //             this.products.push(el);
        //             this.filtered.push(el);
        //         }
        //     });
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for(let el of data){
                    el.img  = `img/product-${el.id_product}.jpeg`;
                    this.products.push(el);
                    this.filtered.push(el);
                }
            })
    },
    template: `
        <div class="product-list-item-flex">
            <product v-for="item of filtered" :key="item.id_product" :img="item.img" :product="item"></product>
        </div>
    `
});
Vue.component('product', {
    props: ['product', 'img'],
    // template: `
    // <div class="product-item">
    //             <img :src="img" alt="Some img">
    //             <div class="desc">
    //                 <h3>{{product.product_name}}</h3>
    //                 <p>{{product.price}} $</p>
    //                 <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>
    //             </div>
    //         </div>
    // `,
    template: `<div class="product-list-item">
                    <a class="product-list-item-link" href="product.html">
                        <img class="product-list-item-pic" :src="img" alt="product">
                        <div class="product-list-txt-box">
                            <p class="product-list-item-title">{{product.product_name}}</p>
                            <p class="product-list-item-desc">{{product.description}}</p>
                            <p class="product-list-item-price">$ {{product.price}}</p>
                        </div>
                    </a>

                    <div class="product-list-add-box">
                        <div class="product-list-add" @click="$parent.$parent.$refs.cart.addProduct(product)">
                            <img src="img/cart-add.svg" alt="">
                            <p class="product-list-add-desc">Add to Cart</p>
                        </div>
                    </div>
                </div>`
})