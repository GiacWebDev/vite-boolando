<script>
export default {
  nome: 'Main',

}
</script>


<template>

  <div class="container">
    <div class="card">

      <div class="top">
        <img src="/img/6.webp" alt="img" class="image-prod">
        <img src="/img/6b.webp" alt="img" class="img-hover">

        <div class="banner">
          <div class="green">
            <p>Sostenibilità</p>
          </div>
        </div>
        <div class="heart">
          <span class="icon">&hearts;</span>
        </div>
      </div>

      <div class="bottom">
        <p>Esprit</p>
        <h2>MAGLIONE - BLACK</h2>
        <p><span class="price">29,99 €</span></p>
      </div>

    </div>
  </div>
  

</template>



<style lang="scss" scoped>

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

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
  font-weight: 700;
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

.top {
  position: relative;
  img {
    width: 420px;
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