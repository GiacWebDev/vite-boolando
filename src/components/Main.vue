<script>
import ProductCard from './partials/ProductCard.vue';
import products from '../data/products';

export default {

  nome: 'Main',
  components: {
    ProductCard,
  },
  
  data() {
    return {
      products
    }
  }

}
</script>


<template>

  <div class="container">

    <ProductCard 
      v-for="product in products" 
      :key="product.id"
      :primaryImage="product.primaryImage"
      :secondaryImage="product.secondaryImage"
      :marca="product.marca"
      :modello="product.modello"
      :fullPrice="product.fullPrice"
      :lastPrice="product.lastPrice"
      />
    
  </div>
  
</template>



<style lang="scss" scoped>

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 50px 0;
  margin: auto;
  margin-top: 60px;
}

</style>