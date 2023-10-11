
<script>
export default {

  name: 'ProductCard',
  // creo un props con tutte le caratteristiche che avrà il prodotto = card per inserirle dinamicamente
  props: {
    primaryImage: String,
    secondaryImage: String,
    discount: String,
    sostenibilita: String,
    marca: String,
    modello: String,
    fullPrice: String,
    lastPrice: String
  }
}
</script>

<template>
  <div class="card">
    <div class="top">
      <img :src="primaryImage" :alt="modello" class="image-prod">
      <img :src="secondaryImage" :alt="modello" class="img-hover">

      <div class="banner">
        <div class="red-discount">
          <p>{{ discount }}</p>
        </div>
        <div class="green">
          <p>{{ sostenibilita }}</p>
        </div>
      </div>
      <div class="heart">
        <span class="icon">&hearts;</span>
      </div>
    </div>
    <div class="bottom">
      <p>{{ marca }}</p>
      <h2>{{ modello }}</h2>
      <p><span class="price">{{ fullPrice }}</span>
        <span class="discount">{{ lastPrice }}</span></p>
    </div>
  </div>
</template>



<style lang="scss">

.card {
  width: 420px;
  display: inline-block;
  margin: 0px 7px 45px 7px;
  cursor: pointer;
  position: relative;
    .top .heart {
      position: absolute;
      top: 10px;
      right: 0px;
      height: 50px;
      width: 50px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 1.6rem;
      }
    }
  }
  
p {
  font-weight: 300;
  font-size: .9rem;
}
.banner {
  position: absolute;
  bottom: 50px;
  .green {
    background-color: green;
    color: white;
    padding: 5px 10px;
    font-size: .8rem;
    display: inline-block
  }
}

.price {
  color: red;
  margin-right: 5px;
}

.top {
  position: relative;
  img {
    width: 420px;
  }
  .red-discount {
    background-color: red;
    color: white;
    padding: 5px 10px;
    margin-right: 3px;
    font-size: .8rem;
    display: inline-block
}
}

.top:hover .image-prod {
  display: none;
}

.img-hover {
  width: 100%;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
}

.top:hover .img-hover {
  display: block;
  position: relative;
}

.bottom h2 {
  font-size: 20px;
  font-weight: 500;
}


</style>