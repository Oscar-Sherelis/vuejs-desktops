<template>
 <div class="navigation">
     <header>
        <nav>
            <h2>
                <router-link to="/">PC shop</router-link>
            </h2>
        </nav>
        <div class="cart-img">
            <router-link to="/chart"><img src= '../assets/shopping_cart.svg'></router-link>
            <span class="bought-product-counter">{{ this.$store.state.boughtItems }}</span>
        </div>
     </header>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    header {
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
    }
    .cart-img {
        position: relative;
    }
    .bought-product-counter {
        position: absolute;
        top: -10px;
        right: -20px;
        border: 4px solid #262430;
        border-radius: 50px;
        padding: 0 5px;
    }
    img {
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
</style>