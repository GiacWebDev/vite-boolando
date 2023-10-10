<script>
export default {
  nome: 'Header',

}
</script>


<template>

<header>

  <div class="container">
    <div class="left">
      <div class="menu">
        <ul>
          <li><a href="#">Donna</a></li>
          <li><a href="#">Uomo</a></li>
          <li><a href="#">Bambini</a></li>
        </ul>
      </div>
    </div>
    
    <div class="logo">
      <img src="/public/img/boolean-logo.png" alt="logo">
    </div>
  
    
    <div class="right">
      <div class="icons">
        <ul>
          <li><a href=""><i class="fa-regular fa-user"></i></a></li>
          <li><a href=""><i class="fa-regular fa-heart"></i></a></li>
          <li><a href=""><i class="fa-solid fa-bag-shopping"></i></a></li>
        </ul>
      </div>
    </div>
    
  </div>
</header>

  
</template>



<style lang="scss" scoped>
@use '../SCSS/main' as *;

header {
  padding: 10px 0;
  background-color: $primary-color;
}

.container {
  display: flex;
  align-items: center;
}

.left,
.right {
  margin: 0;
}

.logo img {
  width: 150px;
}

ul li {
  display: inline-block;
  padding: 5px 8px;
}

a {
  color: $text-secondary-color;
}


</style>