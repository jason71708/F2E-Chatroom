<template>
  <v-app>
    <v-container fluid fill-height>
      <v-row no-gutters align="center" justify="center">
        <v-col cols="12">
          <UserInputInfo />
        </v-col>
        <v-col cols="12">
          <NavButton />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import UserInputInfo from './components/UserInputInfo';
import NavButton from './components/NavButton';

export default {
  name: 'App',
  components: {
    UserInputInfo,
    NavButton,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
/* 因在 IE 11 只使用 min-height 會導致錯誤*/
.v-application--wrap{
  height: 100vh;  
}
</style>

