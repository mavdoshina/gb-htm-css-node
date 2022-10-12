Vue.component('products', {
   data(){
       return {
           catalogUrl: '/catalogData.json',
           filtered: [],
           products: [],
           imgProduct: 'https://placehold.it/200x150'
       }
   },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    item.img  = `img/product-${item.id_product}.jpeg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
   template: `
            <div class="product-list-item-flex">
                <product v-for="item of filtered" :key="item.id_product" :img="item.img" :product="item"></product>
            </div>
            `
});
Vue.component('product', {
    props: ['product', 'img'],
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