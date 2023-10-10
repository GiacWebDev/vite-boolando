<script>
export default {
  nome: 'Header',

}
</script>


<template>

<header>
  <div class="left debug">
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
      icona
      icona
      
    </div>
  </div>
  
</header>

  
</template>



<style lang="scss" scoped>
@use '../SCSS/main' as *;

header {
  display: flex;
  align-items: center;
  padding: 10px 0;
  background-color: $primary-color;
}

.logo img {
  width: 150px;
}

ul li {
  display: inline-block;
  padding: 5px;
}

a {
  color: $text-secondary-color;
}


</style>