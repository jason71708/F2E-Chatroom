<template>
  <v-row no-gutters align="center" justify="center">
    <v-col cols="12">
      <UserInputInfo />
    </v-col>
    <v-col cols="12">
      <NavButton />
    </v-col>
    <v-col cols="12">
      <v-spacer class="my-8"></v-spacer>
    </v-col>
    <AuthorFooter v-if="!this.$vuetify.breakpoint.smAndDown"/>
  </v-row>
</template>

<script>
// @ is an alias to /src
import NavButton from '@/components/NavButton';
import UserInputInfo from '@/components/UserInputInfo';
import AuthorFooter from '@/components/AuthorFooter';

export default {
  name: 'home',
  components: {
    UserInputInfo,
    NavButton,
    AuthorFooter,
  },
};
</script>
