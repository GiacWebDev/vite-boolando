<script>
export default {
  nome: 'Footer',

}
</script>


<template>
  <footer>
    <div class="container">

      <div class="left">
        <h3>Boolando S.r.l</h3>
        <span><a href="#">Informazioni legali</a></span>
        <span><a href="#">Informativa sulla privacy</a></span>
        <span><a href="#">Diritto di recesso</a></span>
      </div>

      <div class="right">
        <h3>Trovaci anche su</h3>
        <div class="social">
          <ul>
            <li><i class="fa-brands fa-square-twitter" style="color: #ffffff;"></i></li>
            <li><i class="fa-brands fa-square-facebook" style="color: #ffffff;"></i></li>
            <li><i class="fa-brands fa-square-instagram" style="color: #ffffff;"></i></li>
            <li><i class="fa-brands fa-square-pinterest" style="color: #ffffff;"></i></li>
            <li><i class="fa-brands fa-square-youtube" style="color: #ffffff;"></i></li>
          </ul>
        </div>
      </div>

    </div>
  </footer>
</template>



<style lang="scss" scoped>
@use '../SCSS/main.scss' as *;

footer {
  background-color: $secondary-color;
  padding: 15px 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left,
.right {
  margin: 0;
}

.social ul {
  display: flex;
}

.social ul li{
  margin: 5px;
}

span a {
  color: $text-secondary-color;
  text-decoration: none;
  margin-right: 5px;
  font-size: .7rem;
}



</style>