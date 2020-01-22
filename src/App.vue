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
.v-application.v-application--is-ltr{
  width: 100vw;
}
.v-application--wrap{
  height: 100vh;
}
.v-application--wrap .container{
  padding: 0;
}
</style>

