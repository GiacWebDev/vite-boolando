<script>

export default {
  nome: 'Header',

}
</script>


<template>

  <header>
    <div class="container">

      <div class="header-box">
  
            <!-- colonna sinistra header  -->
        <div class="menu-header centered">
          <ul>
            <li><a href="#">Donna</a></li>
            <li><a href="#">Uomo</a></li>
            <li><a href="#">Bambini</a></li>
          </ul>
        </div>
  
            <!-- colonna centro header  -->
        <div class="logo-header centered">
          <img src="/img/boolean-logo.png" alt="logo">
        </div>
  
            <!-- colonna destra header  -->
        <div class="list-header centered">
  
          <ul>
            <li>
              <a href="#"><i class="fa-regular fa-user" style="color: #ffffff;"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-regular fa-heart" style="color: #ffffff;"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-solid fa-bag-shopping" style="color: #ffffff;"></i></a>
            </li>
          </ul>
  
        </div>
      </div>
    </div>

  </header>

</template>



<style lang="scss" scoped>
@use '../SCSS/main' as *;


header {
  height: 70px;
  background-color: #FC6900;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 5px 0px black;
  z-index: 2;
}

.container {
  display: flex;
  align-items: center;
  height: 100%;
}

img {
  width: 150px
}

header .header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

header .menu-header {
  margin: 0;
}
header .menu-header li a{
text-decoration: none;
color: white;
font-weight: 600;
font-size: 1rem;
}

header .menu-header li a:hover {
  text-decoration: underline;
}

header .menu-header li {
  display: inline;
  margin-right: 8px;
}

header .menu-header,.list-header {
  width: 20%;
}

header .logo-header {
  width: 200px;
}

header .list-header {
  margin: 0;
  text-align: end;
}

header .list-header li {
  display: inline;
  margin: 5px;
}

</style>