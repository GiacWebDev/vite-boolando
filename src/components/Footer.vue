<script>

import { social_menu } from '../data/menus';
import { footer_menu } from '../data/menus'

export default {
  nome: 'Footer',

  data() {
    return {
      social_menu,
      footer_menu
    }
  }
}
</script>


<template>
  <footer>
    <div class="container">

      <div class="left">
        <h3>Boolando S.r.l</h3>
        <span
          v-for="(item, index) in footer_menu"
          :key="`legalMenu-${index}`"
          ><a :href="item.href">{{ item.text }}</a></span>

      </div>

      <div class="right">
        <h3>Trovaci anche su</h3>
        <div class="social">
          <ul>
            <li
              v-for="(item, index) in social_menu.footer"
              :key="`socialFooter${index}`"
              ><a :href="item.href"><i class="fa-brands" :class="item.icon_class"></i></a>
          </li>
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
  color: white;
}

span a {
  color: $text-secondary-color;
  text-decoration: none;
  margin-right: 5px;
  font-size: .7rem;
}



</style>