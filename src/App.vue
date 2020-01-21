<template>
  <v-app>
    <v-container fluid fill-height>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
/* 因在 IE 11 只使用 min-height 會導致錯誤*/
.v-application--wrap{
  height: 100vh;  
}
.v-application--wrap .container{
  padding: 0;
}
/* 三大瀏覽器實作滾動條隱藏方式 */
html {
    overflow: -moz-hidden-unscrollable;
    height: 100%;
}
body::-webkit-scrollbar {
    display: none;
}
body {
    -ms-overflow-style: none;
    height: 100%;
	width: calc(100vw + 18px);
	overflow: auto;
}
</style>

